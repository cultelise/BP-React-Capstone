import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Gate from './components/Gate';
import Auth from './components/Auth';
import Main from './components/Main';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<hr />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/auth' element={<Auth />} />
			</Routes>
		</div>
	);
}

export default App;
