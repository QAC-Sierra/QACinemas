import React from "react";
import {useEffect, useState} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import "./styles/ListingsGallery.css";

// const Movie = ({title, poster_path}) => {
// 	return (
// 		<div className="movie">
// 			<figure>
// 				<img src={'https://image.tmdb.org/t/p/w1280' + poster_path} alt={title}/>
// 			</figure>
// 			<h3>{title}</h3>
// 		</div>
// 	)
// }



const ListingsGallery = () => {

	const query = `https://api.themoviedb.org/3/discover/movie?&api_key=581ff752d0b7378a67028dc38a686b58&release_date.desc`
	
	const [movies, setMovies] = useState([]);
	
	useEffect(() => {
		fetch(query)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);

	
	return (
		<>
			<header>
				<h1>
				This is the listings gallery for the cinema. Here you can see which films are currently being shown.	
                </h1>
			</header>
			<div>
			<table className="listingsTable">
				{movies.map(movie => (
					<>
								<tr><td>{movie.title}</td></tr>
								<tr><td><img src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path} className="listingsImage"/></td></tr>
								<tr><td>{movie.overview}</td></tr>
								</>		
				))}
				</table>
			</div>			
		</>
	);
}

export default ListingsGallery;