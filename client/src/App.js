import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SportsPage from './pages/SportsPage';
import HomePage from './pages/HomePage';
import BasketballHomePage from './pages/BasketballPages/BasketballHomePage';
import BasketballSchedule from './pages/BasketballPages/BasketballSchedule';
import BasketballStandings from './pages/BasketballPages/BasketballStandings';
import BasketballTeams from './pages/BasketballPages/BasketballTeams';

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/others" element={<SportsPage />} />
					<Route path="/basketball" element={<BasketballHomePage />}>
						<Route path="schedule" element={<BasketballSchedule />} />
						<Route path="standings" element={<BasketballStandings />} />
						<Route path="teams" element={<BasketballTeams />} />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;