const express = require("express");
const app = express();
app.get("/api/people", function (req, res) {
    const data = [
        { name: "Bobo", age: 22 },
        { name: "Nini", age: 23 },
    ];
    return res.status(200).json(data);
});
app.listen(8000, function () {
    console.log("Server running at port 8000...");
});
