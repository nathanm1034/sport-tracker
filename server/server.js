const express = require('express');
const app = express();
const PORT = 3001;
const pool = require('./config/db')

app.listen(PORT, () => {
    console.log(`Server started on part ${PORT}`);
});