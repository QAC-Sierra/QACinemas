import React, {useState} from 'react';
import clsx from 'clsx';
import './styles/Ticket.css';

const movies = [
	{
		name: 'Thor: Love and Thunder',
		price: 10,
		occupied: [20, 21, 30, 1, 2, 8],
	},
	{
		name: 'Prey',
		price: 9,
		occupied: [10, 12, 50, 33, 28, 47],
	},
	{
		name: 'Jurassic World Dominion',
		price: 12,
		occupied: [9, 41, 35, 11, 65, 26],
	},
	{
		name: 'Minions: The Rise of Gru',
		price: 8,
		occupied: [37, 25, 44, 13, 2, 3],
	},
	{
		name: 'Top Gun: Maverick',
		price: 8,
		occupied: [37, 25, 44, 13, 2, 3],
	},
	{
		name: 'The Black Phone',
		price: 8,
		occupied: [37, 25, 44, 13, 2, 3],
	},
	{
		name: 'Doctor Strange In The Mulitverse of Madness',
		price: 8,
		occupied: [37, 25, 44, 13, 2, 3],
	},
	{
		name: 'The Gray Man',
		price: 8,
		occupied: [37, 25, 44, 13, 2, 3],
	},
	{
		name: 'Lightyear',
		price: 8,
		occupied: [37, 25, 44, 13, 2, 3],
	},
	{
		name: 'Purple Hearts',
		price: 8,
		occupied: [37, 25, 44, 13, 2, 3],
	},
	
]

const seats = Array.from({length: 8 * 8}, (_, i) => i)

export default function App() {
	const [selectedMovie, setSelectedMovie] = useState(movies[0])
	const [selectedSeats, setSelectedSeats] = useState([])
	const [value, onChange] = useState(new Date());
	
	return (
		<body className="bookings">
			<div className="App">
				<Movies
					movie={selectedMovie}
					onChange={movie => {
						setSelectedSeats([])
						setSelectedMovie(movie)
					}}
				/>
				{/* <DateTimePickerComponent onChange={onChange}
				          value={value}
				/> */}
				<ShowCase/>
				<Cinema
					movie={selectedMovie}
					selectedSeats={selectedSeats}
					onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
				/>
				
				<p className="info">
					You have selected <span className="count">{selectedSeats.length}</span>{' '}
					seats for the price of £{' '}
					<span className="total">
          {selectedSeats.length * selectedMovie.price}
        </span>
				</p>
			</div>
		</body>
	)
}

function Movies({movie, onChange}) {
	return (
		<body className="container-fluid">
			<div className="Movies">
				<label htmlFor="movie">Pick a movie</label>
				<select
					id="movie"
					value={movie.name}
					onChange={e => {
						onChange(movies.find(movie => movie.name === e.target.value))
					}}
				>
					{movies.map(movie => (
						<option key={movie.name} value={movie.name}>
							{movie.name} (£{movie.price})
						</option>
					))}
				</select>
			</div>
		</body>
	)
}

function ShowCase() {
	return (
		<body className="bookings">
			<ul className="ShowCase">
				<li>
					<span className="seat"/> <small>N/A</small>
				</li>
				<li>
					<span className="seat selected"/> <small>Selected</small>
				</li>
				<li>
					<span className="seat occupied"/> <small>Occupied</small>
				</li>
			</ul>
		</body>
	)
}

function Cinema({movie, selectedSeats, onSelectedSeatsChange}) {
	function handleSelectedState(seat) {
		const isSelected = selectedSeats.includes(seat)
		if (isSelected) {
			onSelectedSeatsChange(
				selectedSeats.filter(selectedSeat => selectedSeat !== seat),
			)
		} else {
			onSelectedSeatsChange([...selectedSeats, seat])
		}
	}
	
	return (
		<body className="Seating">
			<div className="Cinema">
				<div className="screen"/>
				
				<div className="seats">
					{seats.map(seat => {
						const isSelected = selectedSeats.includes(seat)
						const isOccupied = movie.occupied.includes(seat)
						return (
							<span
								tabIndex="0"
								key={seat}
								className={clsx(
									'seat',
									isSelected && 'selected',
									isOccupied && 'occupied',
								)}
								onClick={isOccupied ? null : () => handleSelectedState(seat)}
								onKeyPress={
									isOccupied
										? null
										: e => {
											if (e.key === 'Enter') {
												handleSelectedState(seat)
											}
										}
								}
							/>
						)
					})}
				
				</div>
			</div>
		</body>
	)
}