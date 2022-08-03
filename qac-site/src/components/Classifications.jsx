import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Classifications = () => {
	return (
		<>
			<header>
				<h1>Classifications</h1>
				<div className="container">
					<div className="row">
						<h3>Here you can find information regarding movie classifications, why movies are classified the
							way
							they are and what content may be involved in movies with certain ratings.
						</h3>
					</div>
				</div>
			</header>
			<div className="container">
				<Accordion className="row">
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
							May be unsuitable for children under 12, but can be viewed if accompanied by a parent or
							guardian.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>12</Accordion.Header>
						<Accordion.Body>
							Suitable for audiences 12 and up. Can only be viewed by persons 12 years and up.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>15</Accordion.Header>
						<Accordion.Body>
							Suitable for audiences 15 and up. Can only be viewed by persons 15 years and up.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header>18</Accordion.Header>
						<Accordion.Body>
							Suitable for audiences 18 and up. Can only be viewed by persons 18 years and up.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</>
	);
}

export default Classifications;