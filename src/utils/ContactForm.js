import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

// import './ContactForm.css';

const ContactForm = () => {
	/*=== mailer will look for these for sending an email ===*/
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		phone: '',
		email: '',
		message: '',
	};

	/*=== useState  ===*/
	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState('Send');
	const [status, setStatus] = useState({});
	const [validated, setValidated] = useState(false);

	const myPort = process.env.REACT_APP_MAILER_PATH;

	/*=== handle the change on the form ===*/
	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (await form.checkValidity()) {
			setValidated(true);
			event.preventDefault();

			setButtonText('Sending.....');

			axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
			axios({
				url: myPort,
				method: 'post',
				data: formDetails,
			}).then(function (response) {
				console.log(response.data);
				response.status === 200
					? setStatus({
							success: true,
							message: 'Message sent successfully.',
					  })
					: setStatus({
							success: false,
							message:
								"Something went wrong and we're unable to receive your message. Give us a call, send us an email, or try again later.",
					  });
				// console.log(response.status);
				console.log(response.statusText);
				console.log(response.headers);
				console.log(response.config);
			});

			setButtonText('Send');
			setFormDetails(formInitialDetails);
		} else {
			event.preventDefault();
			event.stopPropagation();
		}
	};

	return (
		<Form
			noValidate
			validated={validated}
			onSubmit={(event) => {
				handleSubmit(event);
			}}
			className='mb-5 my-contact-form fs-6 w-auto mx-auto px-2'>
			<Row className='mb-3'>
				<FloatingLabel
					as={Col}
					controlId='floatingInput'
					label='Enter first name:'
					md={6}
					className='mb-3 pt-2'>
					<Form.Control
						type='text'
						placeholder='Enter first name:'
						value={formDetails.firstName}
						onChange={(e) => onFormUpdate('firstName', e.target.value)}
					/>
				</FloatingLabel>

				<FloatingLabel
					as={Col}
					controlId='floatingInput'
					label='Enter last name:'
					md={6}
					className='pt-2'>
					<Form.Control
						type='text'
						placeholder='Enter last name:'
						value={formDetails.lastName}
						onChange={(e) => onFormUpdate('lastName', e.target.value)}
					/>
				</FloatingLabel>
			</Row>

			<Row className='mb-3'>
				<FloatingLabel
					as={Col}
					controlId='floatingInput'
					label='Enter address:'
					md={6}
					className='mb-3 pt-2'>
					<Form.Control
						type='text'
						placeholder='Enter address:'
						value={formDetails.address}
						onChange={(e) => onFormUpdate('address', e.target.value)}
					/>
				</FloatingLabel>

				<FloatingLabel
					as={Col}
					controlId='floatingInput'
					label='Enter city:'
					md={6}
					className='pt-2'>
					<Form.Control
						type='text'
						placeholder='Enter city:'
						// aria-label='Enter city:'
						value={formDetails.city}
						// aria-label={formDetails.city}
						onChange={(e) => onFormUpdate('city', e.target.value)}
					/>
				</FloatingLabel>
			</Row>
			<Row className='mb-3'>
				<FloatingLabel
					as={Col}
					controlId='floatingInput'
					label='Select your state:'
					md={6}
					className='mb-3 pt-2'>
					<Form.Select
						aria-label={formDetails.state}
						// value={formDetails.state}
						onChange={(e) => onFormUpdate('state', e.target.ariaLabel)}>
						<option aria-label='TX'>Texas (TX)</option>
						<option aria-label='AK'>Alaska (AK)</option>
						{/* <option aria-label='TX'>Texas (TX)</option> */}
						<option aria-label='WA'>Washington (WA)</option>
						<option aria-label='OR'>Oregon (OR)</option>
						<option aria-label='MT'>Montana (MT)</option>
					</Form.Select>
				</FloatingLabel>

				<FloatingLabel
					as={Col}
					controlId='floatingInput'
					label='Enter zip:'
					md={6}
					className='pt-2'>
					<Form.Control
						type='text'
						maxLength='5'
						placeholder='Enter zip'
						value={formDetails.zip}
						onChange={(e) => onFormUpdate('zip', e.target.value)}
					/>
				</FloatingLabel>
			</Row>

			<Row className='mb-3'>
				<FloatingLabel
					as={Col}
					controlId='floatingInput'
					label='Enter phone number:'
					md={6}
					className='mb-3 pt-2'>
					<Form.Control
						type='tel'
						value={formDetails.phone}
						placeholder='Enter phone number:'
						pattern='([0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10})'
						onChange={(e) => onFormUpdate('phone', e.target.value)}
						required
					/>
				</FloatingLabel>

				<FloatingLabel
					as={Col}
					controlId='floatingInput'
					label='Enter email address:'
					md={6}
					className='pt-2'>
					<Form.Control
						type='email'
						value={formDetails.email}
						placeholder='Enter email address:'
						onChange={(e) => onFormUpdate('email', e.target.value)}
					/>
				</FloatingLabel>
			</Row>

			<Row>
				<FloatingLabel
					as={Col}
					controlId='floatingInput'
					label='Briefly describe the reason you are contacting us.'
					value={formDetails.message}
					onChange={(e) => onFormUpdate('message', e.target.value)}
					className='mb-3 pt-2'>
					<Form.Control
						as='textarea'
						placeholder='Briefly describe the reason you are contacting us.'
						style={{ height: '150px' }}
					/>
				</FloatingLabel>
			</Row>
			<Row className='mt-3 text-center'>
				<Col>
					<Button
						size='lg'
						className='text-kulay1'>
						<span>{buttonText}</span>
					</Button>
				</Col>
			</Row>
			<Row>
				{status.message && (
					<Col>
						<p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
					</Col>
				)}
			</Row>
		</Form>
	);
};

export default ContactForm;
