const express = require("express");
const router = express.Router();

const app = express();
const port = 5001;

const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next();
};

app.use(loggerMiddleware);

//Router-level Middleware
app.use("/api/users", router);
const getUsers = (req, res) => {
    res.json({message: "Get all users"})
}

const createUsers = (req, res) => {
    res.json({message: "Create new user"})
}

router.route("/").get(getUsers).post(createUsers);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})