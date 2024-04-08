import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SportsPage from './pages/SportsPage';
import HomePage from './pages/HomePage';

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Routes>
					<Route path="/" exact component={HomePage} />
					<Route path="/sports" exact component={SportsPage} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;