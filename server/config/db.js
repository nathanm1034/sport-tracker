const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, // For development only; not recommended for production
        // For a more secure approach in production, download the RDS root certificate
        // and reference it here using fs.readFileSync
        // ca: fs.readFileSync('/path/to/your/downloaded/rds-ca-2019-root.pem').toString(),
    },    
});

module.exports = pool;