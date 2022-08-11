import React, {useEffect, useState} from 'react';
import axios from "axios";
import Movies from "./Movies";
import "./styles/HomePage.css"

const HomePage = () => {
	const currentDate = new Date();
	const queryDate = currentDate.toJSON().split("T")[0];
	const nowShowing = `https://api.themoviedb.org/3/discover/movie?&api_key=581ff752d0b7378a67028dc38a686b58&release_date.lte=${queryDate}&sort_by=popularity.desc`;
	const upcoming = `https://api.themoviedb.org/3/discover/movie?&api_key=581ff752d0b7378a67028dc38a686b58&release_date.gte=${queryDate}&sort_by=popularity.desc`;
	const [movies, setMovies] = useState([]);
	
	useEffect(() => {
		axios.get(nowShowing)
			.then(res => setMovies(res.data.results))
	}, [])
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
			<h3>Out Now:</h3>
			<div className="container-fluid movie-container"></div>
			<div className="row">
				{movies.map((movie, i) => i < 10 ? <Movies key={movie.id} {...movie}/> : null)}
			</div>
		</>
	);
}

export default HomePage;