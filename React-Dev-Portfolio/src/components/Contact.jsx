import React, {useState, useRef} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import emailjs from '@emailjs/browser';
import '../style/style.css';

function Contact() {
    const form = useRef();
    const [userFormData, setUserFormData] = useState({ from_name: '', email: '', message: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false); 
    const handleInputChange = (event) => {
        console.log(event.target.value)
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        emailjs
        .sendForm('service_xfqm29s', 'template_una1rgn', form.current, {
          publicKey: 'ni33ubhPoeN4TrPos',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

        setUserFormData({
          from_name: '',
          email: '',
          message: '',
        });
      };
    return (
        <Form className="emailjs my-5"ref={form}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleInputChange} name="email" value={userFormData.email} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleInputChange} name="from_name" value={userFormData.from_name} type="text" />
            </Form.Group>
            
            <InputGroup>
                <InputGroup.Text>Message</InputGroup.Text>
                <Form.Control onChange={handleInputChange} name="message" value={userFormData.message} as="textarea" aria-label="With textarea" />
            </InputGroup>
            <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
                Submit
            </Button>
        </Form>
    );
}
export default Contact