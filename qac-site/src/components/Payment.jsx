import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./styles/Payment.css"

const Payment = () => {
	return (
		<>
			<Container>
				<Row>
					<header>
						<h1>You are almost there, please provide your payment details:</h1>
					</header>
				</Row>
				<Row>
					<Form>
						<Col>
							<Form.Group>
								<Form.Label>First Name:</Form.Label>
								<Form.Control type="text"/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label>Surname:</Form.Label>
								<Form.Control type="text"/>s
							</Form.Group>
						</Col>
					</Form>
				</Row>
			</Container>
		</>
	);
}
export default Payment;