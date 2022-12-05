import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './custom.scss';
import './index.css';

// import NavBar from './components/navbar/NavBar';
import Footer from './utils/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import App from './App';
// import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			{/* <NavBar /> */}
			{/* <TopSpacer /> */}
			<Routes>
				{/* <Route
					path='/'
					element={<App />}
				/> */}
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
					path='contact'
					element={<Contact />}
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
