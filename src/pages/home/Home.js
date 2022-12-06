import React from 'react';
import Container from 'react-bootstrap/Container';

import HeroSlides from './components/HeroSlides';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

// import ReviewsSlider from '../../utils/ReviewsSlider';
import './Home.css';

export const Home = () => {
	return (
		<Container
			as='main'
			fluid={true}
			className='px-0'>
			<HeroSlides />
			<ServicesSection />
			{/* <ReviewsSlider /> */}
			<hr className='' />
			<AboutSection />
			<hr className='' />
			<ContactSection />
		</Container>
	);
};

export default Home;
