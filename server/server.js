const express = require("express");
const path = require("path");



const PORT = process.env.PORT || 3011;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}!`);
})