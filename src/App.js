import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Auth from './components/Auth';
import Main from './components/Main';
import Header from './components/Header';
import Article from './components/Article';
import Form from './components/Form';

function App() {
	return (
		<div className='App'>
			<Header />
			<hr />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/garment/:id' element={<Article />} />
				<Route path='/form' element={<Form />} />
			</Routes>
		</div>
	);
}

export default App;
