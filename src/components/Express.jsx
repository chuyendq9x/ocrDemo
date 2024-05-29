const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'D:\FILE_OCR' folder
app.use("/images", express.static("D:\\FILE_OCR"));

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
