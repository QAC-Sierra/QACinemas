import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

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
						<Form.Group>
							<Col>
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text"/>
							</Col>
						</Form.Group>
					</Form>
				</Row>
			</Container>
		</>
	);
}
export default Payment;