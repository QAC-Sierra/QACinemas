import React from 'react';

const HomePage = () => {
	return (
		<>
			<header>
				<nav></nav>
				<img
					src="https://dr3h7ptpe31k5.cloudfront.net/Assets/images/5202/Serviced-Office-(Creative)-London-London-1-St.-Katharines-Way-1275861.jpg"
					alt="QA Cinema"/>
				<h1>Welcome to QA Cinema</h1>
				<h2>
					For all your movie going needs, have a look around and be sure to come visit us, we have a movie for
					everyone.
				</h2>
			</header>
			<div className="description">
				<p>This website is your one stop shop for everything related to QA Cinema</p>
				<p>
					You can book your viewing, you can see all upcoming releases, take part in our online discussion
					board and leave your own reviews and even see the local spots where you can satiate your appetite
					and wet your beak.
				</p>
			</div>
		</>
	);
}

export default HomePage;