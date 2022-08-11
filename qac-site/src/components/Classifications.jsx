import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {Container, Row} from "react-bootstrap";
import "./styles/Classifications.css"

const Classifications = () => {
	return (<>
		<Container>
			<header>
				<h1>Classifications</h1>
				<Row>
					<h3>Here you can find information regarding movie classifications, why movies are classified the
						way they are and what content may be involved in movies with certain ratings.
					</h3>
				</Row>
			</header>
			<Row>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header><img className="classificationImg"
						                       src="https://static.wikia.nocookie.net/rating-system/images/8/88/BBFC_U.svg"
						                       alt="U"/>
							Suitable for all ages.
						</Accordion.Header>
						<Accordion.Body>
							U films should be set within a positive framework and should offer reassuring
							counterbalances to any violence, threat or horror. If a work is particularly suitable for
							pre-school children, this will be indicated in the Ratings Info. More information can be
							found <a href="https://www.bbfc.co.uk/rating/u" target="_blank">here</a>.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							<img className="classificationImg"
							     src="https://static.wikia.nocookie.net/rating-system/images/b/b5/BBFC_PG.svg"
							     alt="PG"/>
							Parental Guidance
						</Accordion.Header>
						<Accordion.Body>
							General viewing, but some scenes may be unsuitable for young children. A PG film should not
							unsettle a child aged around eight or older. Unaccompanied children of any age may watch,
							but
							parents are advised to consider whether the content may upset younger, or more sensitive,
							children. More information can be found <a href="https://www.bbfc.co.uk/rating/pg"
							                                           target="_blank">here</a>.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>
							<img className="classificationImg"
							     src="https://static.wikia.nocookie.net/rating-system/images/8/87/BBFC_12A.svg"
							     alt="12A"/>
							Cinema release suitable for 12 years and over
						</Accordion.Header>
						<Accordion.Body>
							Films classified 12A and video works classified 12 contain material that is not generally
							suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema
							unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film
							should consider whether the film is suitable for that child. To help them decide, we
							recommend that they check the Ratings Info for that film in advance. No one younger than 12
							may rent or buy a 12 rated video work. More information can be found <a
							href="https://www.bbfc.co.uk/rating/12" target="_blank">here</a>.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>
							<img className="classificationImg"
							     src="https://static.wikia.nocookie.net/rating-system/images/8/84/BBFC_12.svg"
							     alt="12"/>
							Video release suitable for 12 years and over
						</Accordion.Header>
						<Accordion.Body>
							Films classified 12A and video works classified 12 contain material that is not generally
							suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema
							unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film
							should consider whether the film is suitable for that child. To help them decide, we
							recommend that they check the Ratings Info for that film in advance. No one younger than 12
							may rent or buy a 12 rated video work. More information can be found <a
							href="https://www.bbfc.co.uk/rating/12" target="_blank">here</a>.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header><img className="classificationImg"
						                       src="https://static.wikia.nocookie.net/rating-system/images/0/03/BBFC_15.svg"
						                       alt="15"/>
							Suitable only for 15 years and older.
						</Accordion.Header>
						<Accordion.Body>
							No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy
							a 15 rated video work. More information can be found <a
							href="https://www.bbfc.co.uk/rating/15" target="_blank">here</a>.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header><img className="classificationImg"
						                       src="https://static.wikia.nocookie.net/rating-system/images/9/9f/BBFC_18.svg"
						                       alt="18"/>
							Suitable only for adults.
						</Accordion.Header>
						<Accordion.Body>
							No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or
							buy an 18 rated video work. Adults should be free to choose their own entertainment.
							More information can be found <a href="https://www.bbfc.co.uk/rating/18"
							                                 target="_blank">here</a>.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Row>
		</Container>
	</>);
}

export default Classifications;