import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import './HomeCardGroup.css';

const HomeCardGroup = () => {
	return (
		<Container className='home-card-group'>
			<h1 className='mt-5'>Services</h1>
			<hr className='mx-auto w-25' />
			<CardGroup className='row my-5'>
				<Card className='col-12 col-lg-4'>
					<Card.Img
						variant='top'
						src='holder.js/100px160'
					/>
					<Card.Body>
						<Card.Title>Service #1</Card.Title>
						<Card.Text>
							Explain service #1. <br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button
							variant='success'
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>

				<Card className='col-12 col-lg-4'>
					<Card.Img
						variant='top'
						src='holder.js/100px160'
					/>
					<Card.Body>
						<Card.Title>Service #2</Card.Title>
						<Card.Text>
							Explain service #2. <br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button
							variant='success'
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>

				<Card className='col-12 col-lg-4'>
					<Card.Img
						variant='top'
						src='holder.js/100px160'
					/>
					<Card.Body>
						<Card.Title>Service #3</Card.Title>
						<Card.Text>
							Explain service #3. <br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button
							variant='success'
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>
			</CardGroup>

			{/*,,'===D=I=V=I=D=I=N=G===L=I=N=E=== === ===*/}

			<CardGroup className='row my-5'>
				<Card className='col-12 col-lg-4'>
					<Card.Img
						variant='top'
						src='holder.js/100px160'
					/>
					<Card.Body>
						<Card.Title>Service #4</Card.Title>
						<Card.Text>
							Explain service #4. <br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button
							variant='success'
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>

				<Card className='col-12 col-lg-4'>
					<Card.Img
						variant='top'
						src='holder.js/100px160'
					/>
					<Card.Body>
						<Card.Title>Service #5</Card.Title>
						<Card.Text>
							Explain service #5. <br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button
							variant='success'
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>

				<Card className='col-12 col-lg-4'>
					<Card.Img
						variant='top'
						src='holder.js/100px160'
					/>
					<Card.Body>
						<Card.Title>Service #6</Card.Title>
						<Card.Text>
							Explain service #6. <br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button
							variant='success'
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>
			</CardGroup>
		</Container>
	);
};

export default HomeCardGroup;
