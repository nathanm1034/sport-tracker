const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const basketballRoutes = require('./api/basketball/teams');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/basketball/teams', basketballRoutes);

app.listen(PORT, () => {
    console.log(`Server started on part ${PORT}`);
});