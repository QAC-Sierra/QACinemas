import React from "react";
import "./styles/ListingsGallery.css";


const ListingsGallery = () => {


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
							<b>Thor: Love and Thunder</b> <br /> 
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
								<b>Jurassic World Dominion</b><br />
								<a href="https://www.imdb.com/title/tt10648342/" target="_blank" rel="noreferrer">
									<img className="movieImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZ5pdPcQ6LCKMk_JWiK0UfHViF5afN7VLWYfB8A1BkOXNrvC6" alt="Jurassic World poster" />
								</a>
							</td>

							<td>
								<p className="movieText">
									Starring: Chris Pratt, Bryce Dallas Howard.
									<br /> <br />
									Four years after the destruction of Isla Nublar, dinosaurs now live and hunt alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.
								</p>
							</td>

							<td>
								Release Date: 09/08/2022
							</td>
						</tr>

						<tr>
							<td>
								<b>The Gray Man</b><br />
								<a href="https://www.imdb.com/title/tt1649418/" target="_blank" rel="noreferrer">
									<img className="movieImage" src="https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" alt="The Gray Man poster" />
								</a>
							</td>

							<td>
								<p className="movieText">
									Starring: Ryan Gosling, Chris Evans.
									<br />
									<br />
									When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague.</p>
							</td>
							
							<td>
								Release Date: 05/08/2022
							</td>
						</tr>


						<tr>
							<td>
								<b>Prey</b><br />
								<a href="https://www.imdb.com/title/tt11866324/" target="_blank" rel="noreferrer">
									<img className="movieImage" src="https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/07/PREY-poster.jpeg?resize=740%2C1096&ssl=1" alt="Prey poster" />
								</a>
							</td>

							<td>
								<p className="movieText">
									Starring: Amber Midthunder, Dan Trachtenberg.
									<br />
									<br />
									A skilled Comanche warrior protects her tribe from a highly evolved alien predator that hunts humans for sport, fighting against wilderness, dangerous colonisers and this mysterious creature to keep her people safe.</p>
							</td>
							
							<td>
								Release Date: 07/08/2022
							</td>
						</tr>
					</tbody>
				</table>
				<br /><br />
			</div>			
		</>
	);
}
export default ListingsGallery;