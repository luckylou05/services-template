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
			className='mx-auto text-center g-0'>
			<HeroSlides />
			<ServicesSection />
			{/* <ReviewsSlider /> */}
			<AboutSection />
			<ContactSection />
		</Container>
	);
};

export default Home;
