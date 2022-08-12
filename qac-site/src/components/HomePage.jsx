import React, {useEffect, useState} from 'react';
import axios from "axios";
import Movies from "./Movies";
import "./styles/HomePage.css";
import {Carousel} from "react-bootstrap";

const HomePage = () => {
	const [date, setDate] = useState("");
	const [year, setYear] = useState("");
	
	useEffect(() => {
		setDate(new Date().toJSON().split("T")[0]);
		console.log(date);
	}, []);
	
	useEffect(() => {
		setYear(date.split("-")[0]);
		console.log(year);
	}, []);
	
	const nowShowing = `https://api.themoviedb.org/3/discover/movie?&api_key=581ff752d0b7378a67028dc38a686b58&language=en&region=GB&release_date.lte=${date}`;
	const upcoming = `https://api.themoviedb.org/3/discover/movie?&api_key=581ff752d0b7378a67028dc38a686b58&&language=en&region=GB&year=${year}&sort_by=release_date.desc&release_date.gte=${date}`;
	const IMG_API = "https://image.tmdb.org/t/p/w1280";
	const [currentMovies, setCurrentMovies] = useState([]);
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	
	useEffect(() => {
		axios.get(nowShowing)
			.then(res => {
				console.log(res.data);
				setCurrentMovies(res.data.results)
			})
			.catch(err => console.error(err))
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
			<Carousel interval={null}>
				<Carousel.Item className="banner">
					<div>
						{currentMovies.map(
							(movie, i) => i === 0 ?
								<img className="carousel-poster" src={IMG_API + movie.poster_path} alt={movie.title}/> :
								null)}
					</div>
				
				</Carousel.Item>
				<Carousel.Item className="banner">
					<div>
						{currentMovies.map(
							(movie, i) => i === 1 ?
								<img className="carousel-poster" src={IMG_API + movie.poster_path} alt={movie.title}/> :
								null)}
					</div>
				</Carousel.Item>
				<Carousel.Item className="banner">
					<div>
						{currentMovies.map(
							(movie, i) => i === 2 ?
								<img className="carousel-poster" src={IMG_API + movie.poster_path} alt={movie.title}/> :
								null)}
					</div>
				
				
				</Carousel.Item>
			</Carousel>
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