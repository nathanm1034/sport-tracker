const { Pool } = require('pg');
require('dotenv').config(); // Make sure to require this if you're using environment variables

// Ensure your .env file or environment variables are configured with these details
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

async function query() { // can be used as a template to gather data from tables in the database
    try {
        const res = await pool.query('SELECT * FROM nba_teams');
        
        const headers = res.fields.map(field => field.name);
        console.log("Headers:", headers);

        console.log("Rows:", res.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
    } finally {
        await pool.end();
    }
};

async function modify() { // can be used as a template for modifying tables in the database
    const query = 
        `INSERT INTO nba_teams (league_id, name, city, abbreviation, conference, division, logo_url, official_website) VALUES 
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Atlanta Hawks', 'Atlanta', 'ATL', 'Eastern', 'Southeast', 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg', 'https://www.nba.com/hawks/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Boston Celtics', 'Boston', 'BOS', 'Eastern', 'Atlantic', 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg', 'https://www.nba.com/celtics/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Brooklyn Nets', 'Brooklyn', 'BKN', 'Eastern', 'Atlantic', 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', 'https://www.nba.com/nets/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Charlotte Hornets', 'Charlotte', 'CHA', 'Eastern', 'Southeast', 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg', 'https://www.nba.com/hornets/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Chicago Bulls', 'Chicago', 'CHI', 'Eastern', 'Central', 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg', 'https://www.nba.com/bulls/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Cleveland Cavaliers', 'Cleveland', 'CLE', 'Eastern', 'Central', 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg', 'https://www.nba.com/cavaliers/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Dallas Mavericks', 'Dallas', 'DAL', 'Western', 'Southwest', 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg', 'https://www.mavs.com/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Denver Nuggets', 'Denver', 'DEN', 'Western', 'Northwest', 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg', 'https://www.nba.com/nuggets/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Detroit Pistons', 'Detroit', 'DET', 'Eastern', 'Central', 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg', 'https://www.nba.com/pistons/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Golden State Warriors', 'San Francisco', 'GSW', 'Western', 'Pacific', 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', 'https://www.nba.com/warriors/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Houston Rockets', 'Houston', 'HOU', 'Western', 'Southwest', 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg', 'https://www.nba.com/rockets/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Indiana Pacers', 'Indianapolis', 'IND', 'Eastern', 'Central', 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg', 'https://www.nba.com/pacers/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Los Angeles Clippers', 'Los Angeles', 'LAC', 'Western', 'Pacific', 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', 'https://www.nba.com/clippers/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Los Angeles Lakers', 'Los Angeles', 'LAL', 'Western', 'Pacific', 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', 'https://www.nba.com/lakers/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Memphis Grizzlies', 'Memphis', 'MEM', 'Western', 'Southwest', 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg', 'https://www.nba.com/grizzlies/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Miami Heat', 'Miami', 'MIA', 'Eastern', 'Southeast', 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', 'https://www.nba.com/heat/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Milwaukee Bucks', 'Milwaukee', 'MIL', 'Eastern', 'Central', 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg', 'https://www.nba.com/bucks/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Minnesota Timberwolves', 'Minneapolis', 'MIN', 'Western', 'Northwest', 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg', 'https://www.nba.com/timberwolves/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'New Orleans Pelicans', 'New Orleans', 'NOP', 'Western', 'Southwest', 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg', 'https://www.nba.com/pelicans/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'New York Knicks', 'New York', 'NYK', 'Eastern', 'Atlantic', 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg', 'https://www.nba.com/knicks/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Oklahoma City Thunder', 'Oklahoma City', 'OKC', 'Western', 'Northwest', 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg', 'https://www.nba.com/thunder/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Orlando Magic', 'Orlando', 'ORL', 'Eastern', 'Southeast', 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg', 'https://www.nba.com/magic/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Philadelphia 76ers', 'Philadelphia', 'PHI', 'Eastern', 'Atlantic', 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg', 'https://www.nba.com/sixers/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Phoenix Suns', 'Phoenix', 'PHX', 'Western', 'Pacific', 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg', 'https://www.nba.com/suns/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Portland Trail Blazers', 'Portland', 'POR', 'Western', 'Northwest', 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg', 'https://www.nba.com/blazers/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Sacramento Kings', 'Sacramento', 'SAC', 'Western', 'Pacific', 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg', 'https://www.nba.com/kings/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'San Antonio Spurs', 'San Antonio', 'SAS', 'Western', 'Southwest', 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg', 'https://www.nba.com/spurs/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Toronto Raptors', 'Toronto', 'TOR', 'Eastern', 'Atlantic', 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg', 'https://www.nba.com/raptors/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Utah Jazz', 'Salt Lake City', 'UTA', 'Western', 'Northwest', 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg', 'https://www.nba.com/jazz/'),
        ((SELECT league_id FROM leagues WHERE abbreviation = 'NBA'), 'Washington Wizards', 'Washington, D.C.', 'WAS', 'Eastern', 'Southeast', 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg', 'https://www.nba.com/wizards/');
        `;

    try {
        await pool.query(query);
        console.log('Successfully modified');
    } catch (err) {
        console.error('Error executing query', err.stack);
    } finally {
        await pool.end();
    }
};

query();
// modify();