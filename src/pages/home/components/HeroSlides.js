import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import './HeroSlides.css';
import slideImg1 from '../../../assets/images/slide-image1.png';
import slideImg2 from '../../../assets/images/slide-image2.png';
import slideImg3 from '../../../assets/images/slide-image3.png';

const HeroSlides = () => {
	return (
		<Carousel
			controls={true}
			indicators={false}
			fade={true}
			className='row-cols-1 hero-slides'>
			<Carousel.Item
				interval={5000}
				className='col'>
				<img
					className='d-block'
					src={slideImg1}
					alt='SlideImage'
				/>
				<Carousel.Caption className='w-75'>
					<h2>
						Lorem ipsum dolor sit amet
						<br />
						consectetur adipiscing elit
					</h2>
					<Button
						variant='primary'
						size='lg'
						className='mt-3'>
						<h3>Call Now</h3>
					</Button>{' '}
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item
				interval={5000}
				className='col'>
				<img
					className='d-block w-100'
					src={slideImg2}
					alt='SlideImage'
				/>
				<Carousel.Caption className='w-75'>
					<h2>
						Lorem ipsum dolor sit amet
						<br />
						consectetur adipiscing elit
					</h2>
					<Button
						variant='primary'
						size='lg'
						className='mt-3'>
						<h3>Call Now</h3>
					</Button>{' '}
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item
				interval={5000}
				className='col'>
				<img
					className='d-block w-100'
					src={slideImg3}
					alt='SlideImage'
				/>
				<Carousel.Caption className='w-75'>
					<h2>
						Lorem ipsum dolor sit amet
						<br />
						consectetur adipiscing elit
					</h2>
					<Button
						variant='primary'
						size='lg'
						className='mt-3'>
						<h3>Call Now</h3>
					</Button>{' '}
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default HeroSlides;
