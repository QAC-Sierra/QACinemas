import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movies = ({title, poster_path}) => {
	return (
		<div className="movie">
			<figure className="movie-poster">
				<img src={IMG_API + poster_path} alt={title}/>
				<figcaption>{title}</figcaption>
			</figure>
		</div>
	)
}

export default Movies;