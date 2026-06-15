const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
    console.log("Form Data:", req.body);

    res.json({
        message: "Message received successfully!"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
