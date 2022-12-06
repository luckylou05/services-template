import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './custom.scss';
import './index.css';

import App from './App';
import Footer from './utils/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Services2 from './pages/services/Services2';
import Contact from './pages/contact/Contact';
import Reviews from './pages/reviews/Reviews';
// import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			<Routes>
				<Route
					path='/'
					index
					element={<Home />}
				/>
				<Route
					path='about'
					element={<About />}
				/>
				<Route
					path='services'
					element={<Services />}
				/>
				<Route
					path='services2'
					element={<Services2 />}
				/>
				<Route
					path='contact'
					element={<Contact />}
				/>
				<Route
					path='reviews'
					element={<Reviews />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
