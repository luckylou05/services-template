import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// import imageImg from '../../assets/images/services.png';

const ReviewsSlider = () => {
	return (
		<Container>
			<Carousel
				controls={false}
				indicators={true}
				fade={true}
				className='row-cols-1 home-hero-slides shadow-lg rounded-3'>
				<Carousel.Item
					interval={2000}
					className='col'>
					<iframe
						src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flouiesinson05%2Fposts%2Fpfbid0LH3b7J4twkPrTfE4k7cdva32ag2v6h4sdTTntK4cJW11QNoGbL12Rs5kvWjqRbKCl&show_text=true&width=350'
						title='review2'
						loading='lazy'
						data-href='https://www.facebook.com/louiesinson05/posts/pfbid0LH3b7J4twkPrTfE4k7cdva32ag2v6h4sdTTntK4cJW11QNoGbL12Rs5kvWjqRbKCl'
						data-width=''
						height='250'
						data-show-text={true}
						style={{ border: 'none', overflow: 'hidden', objectFit: 'contain' }}
						scrolling='no'
						frameBorder='0'
						allowFullScreen={true}
						allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
						className='w-100'></iframe>
				</Carousel.Item>

				<Carousel.Item
					interval={2000}
					className='col'>
					<iframe
						src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmason.munro%2Fposts%2Fpfbid02ng4VBGoEL2WuUyiToev65bCeHk4VxNwGjijQovrnQ3g6g7fvVSHQeZjwB48iDZ6el&show_text=true&width=350'
						title='review2'
						loading='lazy'
						data-href='https://www.facebook.com/mason.munro/posts/pfbid02ng4VBGoEL2WuUyiToev65bCeHk4VxNwGjijQovrnQ3g6g7fvVSHQeZjwB48iDZ6el'
						data-width=''
						height='250'
						data-show-text={true}
						style={{ border: 'none', overflow: 'hidden', objectFit: 'contain' }}
						scrolling='no'
						frameBorder='0'
						allowFullScreen={true}
						allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
						className='w-100'></iframe>
				</Carousel.Item>

				<Carousel.Item
					interval={2000}
					className='col'>
					<iframe
						src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02V27A14QKw5jc8UoF9EK4aWvPbQZeQYQkySGVY8Q1dsSWcjkUnF81b6GfaG5Uqcd4l%26id%3D100028524247250&show_text=true&width=350'
						title='review3'
						loading='lazy'
						data-href='https://www.facebook.com/permalink.php?story_fbid=pfbid02V27A14QKw5jc8UoF9EK4aWvPbQZeQYQkySGVY8Q1dsSWcjkUnF81b6GfaG5Uqcd4l&id=100028524247250'
						data-width=''
						height='250'
						data-show-text={true}
						style={{ border: 'none', overflow: 'hidden', objectFit: 'contain' }}
						scrolling='no'
						frameBorder='0'
						allowFullScreen={true}
						allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
						className='w-100'></iframe>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default ReviewsSlider;
