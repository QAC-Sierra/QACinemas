import React from "react";
import "./styles/NewReleases.css";

const NewReleases = () => {
	return (
		<>
		<header>
			<h1>Current Listings Gallery</h1>
			<h3>These are the current films showing in the cinema</h3>
		</header>

		<div>
			<table id="listingsTable">
				<tbody>
					<tr className="movieRow">
						<td>
						<b>Black Panther: Wakanda Forever</b> <br /> 
							<a href="https://www.imdb.com/title/tt10648342/" target="_blank" rel="noreferrer">
								<img className="movieImage" src="https://lumiere-a.akamaihd.net/v1/images/01fe70e80a0ac867c9a9470641df6848_2764x4096_86b89bf5.jpeg?region=0,0,2764,4096" alt="Thor poster" />
							</a>
						
						</td>
						<td>
						<p className="movieText">
						Starring: Chris Hemsworth, Natalie Portman.<br />
						<br />
						Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who -- to his surprise -- inexplicably wields his magical hammer. Together, they set out on a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance.</p>
						</td>
						<td>
						Release date: 11/08/2022
						</td>
					</tr>
						
					<tr>
						<td>
							<b>Amsterdam</b><br />
							<a href="https://www.imdb.com/title/tt10304142/" target="_blank" rel="noreferrer">
								<img className="movieImage" src="https://pbs.twimg.com/media/FW_YhXZUEAEQUsU?format=jpg&name=4096x4096" alt="Amsterdam poster" />
							</a>
						</td>

						<td>
							<p className="movieText">
								Starring: Margot Robbie, Anya Taylor-Joy.
								<br /> <br />
								Set in the '30s, it follows three friends who witness a murder, become suspects themselves, and uncover one of the most outrageous plots in American history.
							</p>
						
						</td>

						<td>
							Release Date: 09/08/2022
						</td>
					</tr>

					<tr>
						<td>
							<b>Halloween Ends</b><br />
							<a href="https://www.imdb.com/title/tt10665342/" target="_blank" rel="noreferrer">
								<img className="movieImage" src="https://sportshub.cbsistatic.com/i/2022/07/21/57c7dcd7-4be5-4910-ba7e-7c621a03435c/halloween-ends-official-poster-michael-myers.jpg?auto=webp&width=2587&height=4096&crop=0.632:1,smart" alt="Halloween ends poster" />
							</a>
						</td>

						<td>
							<p className="movieText">
								Starring: Jamie Lee Curtis, Will Patton.
								<br />
								<br />
								Four years after her last encounter with masked killer Michael Myers, Laurie Strode is living with her granddaughter and trying to finish her memoir. Myers hasn't been seen since, and Laurie finally decides to liberate herself from rage and fear and embrace life. However, when a young man stands accused of murdering a boy that he was babysitting, it ignites a cascade of violence and terror that forces Laurie to confront the evil she can't control.
							</p>
								</td>
						
						<td>
							Release Date: 14/10/2022
						</td>
					</tr>


					<tr>
						<td>
							<b>Blonde</b><br />
							<a href="https://www.imdb.com/title/tt1655389/" target="_blank" rel="noreferrer">
								<img className="movieImage" src="https://upload.wikimedia.org/wikipedia/en/6/6d/Blonde_2022_film_poster.jpg" alt="Blonde poster" />
							</a>
						</td>

						<td>
							<p className="movieText">
								Starring: Ana de Armas, Bobby Cannavale.
								<br />
								<br />
								A look at the rise to fame and the epic demise of actress Marilyn Monroe, one of the biggest stars in the world.</p>
						</td>
						
						<td>
							Release Date: December 2022
						</td>
					</tr>
				</tbody>
			</table>
			<br /><br />
		</div>			
	</>
	);
}

export default NewReleases;