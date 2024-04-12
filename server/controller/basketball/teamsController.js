const pool = require('../../config/db');

const getNBATeams = async (req, res) => {
    const query = `SELECT * FROM nba_teams;`;

    try {
        const result = await pool.query(query);
        res.json(result.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
};

module.exports = {
    getNBATeams
};