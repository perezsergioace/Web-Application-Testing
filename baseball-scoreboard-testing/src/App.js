import React, { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
	const [ strikes, setStrikes ] = useState(0);
	const [ balls, setBalls ] = useState(0);

	const strike = () => {
		if (strikes === 2) {
			setStrikes(0);
			setBalls(0);
		} else {
			setStrikes(strikes + 1);
		}
	};

	const ball = () => {
		if (balls === 3) {
			setBalls(0);
			setStrikes(0);
		} else {
			setBalls(balls + 1);
		}
	};

	const foul = () => {
		if (strikes === 2) {
			setStrikes(2);
		} else {
			setStrikes(strikes + 1);
		}
	};

	const hit = () => {
		setStrikes(0);
		setBalls(0);
	};

	return (
		<div className="App">
			<h1>Basseball Scoreboard App</h1>
			<Display strikes={strikes} balls={balls} />
			<Dashboard ball={ball} strike={strike} foul={foul} hit={hit} />
		</div>
	);
}

export default App;
