import React from 'react';
import Container from 'react-bootstrap/Container';
import HeroSlides from './components/HeroSlides';
import HomeCardGroup from './components/HomeCardGroup';

import About from '../about/About';
import Contact from '../contact/Contact';

import './Home.css';

export const Home = () => {
	return (
		<Container
			as='main'
			fluid={true}
			className='px-0'>
			<HeroSlides />
			{/* <hr className='' /> */}
			<HomeCardGroup />
			<hr className='' />
			<About />
			<hr className='' />
			<Contact />
		</Container>
	);
};

export default Home;
