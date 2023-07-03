import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Gate from './components/Gate';
import Auth from './components/Auth';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Gate />} />
				<Route path='/auth' element={<Auth />} />
			</Routes>
		</div>
	);
}

export default App;
