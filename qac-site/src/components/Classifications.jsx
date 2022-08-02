import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Classifications = () => {
	return (
		<>
			<header>
				<h1>
					Here you can find information regarding movie classifications, why movies are classified the way
					they are and what content may be involved in movies with certain ratings.
				</h1>
			</header>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>U</Accordion.Header>
					<Accordion.Body>
						Suitable for all ages.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>PG</Accordion.Header>
					<Accordion.Body>
						Parental Guidance, may contain scenes not suitable for younger children.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>12A</Accordion.Header>
					<Accordion.Body>
						Suitable for audiences 12 and up.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header>12</Accordion.Header>
					<Accordion.Body>
						Suitable for audiences 12 and up.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="4">
					<Accordion.Header>15</Accordion.Header>
					<Accordion.Body>
						Suitable for audiences 12 and up.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="5">
					<Accordion.Header>18</Accordion.Header>
					<Accordion.Body>
						Suitable for audiences 12 and up.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	);
}

export default Classifications;