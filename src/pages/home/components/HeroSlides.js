import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import hero1 from '../../../assets/images/hero1.png';
import hero2 from '../../../assets/images/hero2.png';
import hero3 from '../../../assets/images/hero3.png';

const HeroSlides = () => {
	return (
		<Carousel
			controls={true}
			indicators={false}
			fade={true}
			className='home-hero-slides shadow-lg'>
			<Carousel.Item
				interval={5000}
				className=''>
				<img
					className='d-block'
					src={hero1}
					alt='SlideImage'
				/>
				<Carousel.Caption className='w-75 h-75 position-absolute hero-caption-group'>
					<p className='shadow-text-black user-select-none lh-base'>
						Lorem ipsum dolor sit amet
						<br />
						consectetur adipiscing elit
					</p>
					<Button
						variant='outline-color1 shadow-lg ripple-effect2'
						className='btn mt-3'>
						<span className='shadow-text-black'>Call Now</span>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item
				interval={5000}
				className=''>
				<img
					className='d-block w-100'
					src={hero2}
					alt='SlideImage'
				/>
				<Carousel.Caption className='w-75 h-75 position-absolute hero-caption-group'>
					<p className='shadow-text-black user-select-none lh-base'>
						Lorem ipsum dolor sit amet
						<br />
						consectetur adipiscing elit
					</p>
					<Button
						variant='outline-color1 shadow-lg ripple-effect2'
						className='btn mt-3'>
						<span className='shadow-text-black'>Call Now</span>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item
				interval={5000}
				className=''>
				<img
					className='d-block w-100'
					src={hero3}
					alt='SlideImage'
				/>
				<Carousel.Caption className='w-75 h-75 position-absolute hero-caption-group'>
					<p className='shadow-text-black user-select-none lh-base'>
						Lorem ipsum dolor sit amet
						<br />
						consectetur adipiscing elit
					</p>
					<Button
						variant='outline-color1 shadow-lg ripple-effect2'
						className='btn mt-3'>
						<span className='shadow-text-black'>Call Now</span>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default HeroSlides;
