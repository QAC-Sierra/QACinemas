import React, {useEffect, useState} from 'react';
import axios from "axios";
import Movies from "./Movies";
import "./styles/HomePage.css";

const HomePage = () => {
	const [date, setDate] = useState("");
	
	useEffect(() => {
		setDate(new Date().toJSON().split("T")[0]);
		console.log(date);
	}, []);
	
	const nowShowing = `https://api.themoviedb.org/3/discover/movie?&api_key=581ff752d0b7378a67028dc38a686b58&language=en&region=GB&release_date.lte=${date}`;
	const upcoming = `https://api.themoviedb.org/3/discover/movie?&api_key=581ff752d0b7378a67028dc38a686b58&&language=en&region=GB&sort_by=release_date.asc&release_date.gte=${date}&page=5`;
	const [currentMovies, setCurrentMovies] = useState([]);
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	
	useEffect(() => {
		axios.get(nowShowing)
			.then(res => {
				console.log(res.data);
				setCurrentMovies(res.data.results)
			})
	}, []);
	
	useEffect(() => {
		axios.get(upcoming)
			.then((res) => {
				console.log(res.data);
				setUpcomingMovies(res.data.results)
			})
			.catch(err => console.error(err));
	}, []);
	
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
			<div className="container-fluid movie-container">
				<div className="row">
					<h3>Now Showing</h3>
				</div>
				<div className="row">
					{currentMovies.map((movie, i) => i < 10 ? <Movies key={movie.id} {...movie}/> : null)}
				</div>
				<div className="row">
					<h3>Coming Soon</h3>
				</div>
				<div className="row">
					{upcomingMovies.map((movie, i) => i < 10 ? <Movies key={movie.id} {...movie}/> : null)}
				</div>
			</div>
		</>
	);
}

export default HomePage;