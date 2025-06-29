const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const upload = multer({dest: "./Public/uploads"});

const app = express();
const port = 5001;

//Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/static",express.static(path.join(__dirname, "public")));

//Application-level Middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next();
};

app.use(loggerMiddleware);
//Third party middleware
app.use(logger("combined"));

//Router-level Middleware
app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
    const authStatus = true;
    if (authStatus){
        console.log("Auth Status : ", authStatus);
        next();
    }else{
        res.status(401);
        throw new Error("User not authorized");
    }
}
const getUsers = (req, res) => {
    res.json({message: "Get all users"})
}

const createUsers = (req, res) => {
    console.log("This is request bosy from client : ", req.body);
    res.json({message: "Create new user"})
}

router.use(fakeAuth);
router.route("/").get(getUsers).post(createUsers);

//Error Handling middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    switch(statusCode){
        case 401:
        res.json({
            title : "User Not Authorized",
            message : err.message,
        });
        break;

        case 404:
        res.json({
            title : "Not Found",
            message : err.message,
        });
        break;

        case 500:
        res.json({
            title : "Server Error",
            message : err.message,
        });
        break;

        default:
            break;
    }
};

app.post("/upload", upload.single("image"), (req, res, next) => {
    console.log(req.file, req.body);
    res.send(req.file);
}, (err, req, res, next) => {
    res.status(400).send({err: err.message});
});

// app.all("*", (req, res) => {
//     res.status(404);
//     throw new Error("Route Not Found");
// });

app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});