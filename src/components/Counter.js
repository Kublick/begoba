import React from 'react';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types';

const Counter = ({ date }) => {
	let eventDate = date;

	const renderer = ({ days, hours, minutes }) => {
		let timeDay = 'D';
		let timeHour = 'H';
		let timeMinutes = 'M';

		// if (days < 2) {
		// 	timeDay = 'dia';
		// }

		// if (hours < 2) {
		// 	timeHour = 'hora';
		// }

		// if (timeMinutes >= 2) {
		// 	timeMinutes = 'minuto';
		// }

		return (
			<div className="flex counter-num">
				<div className="flex flex-col items-center w-16 p-4 text-white bg-black rounded-l-md">
					<p className="text-3xl">{days}</p> <p>{timeDay}</p>
				</div>
				<div className="flex flex-col items-center w-16 p-4 text-white bg-black">
					<p className="text-3xl">{hours}</p>
					<p>{timeHour}</p>
				</div>
				<div className="flex flex-col items-center w-16 p-4 text-white bg-black rounded-r-md">
					<p className="text-3xl">{minutes}</p>
					<p>{timeMinutes}</p>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="grid ">
				{/* <p>la clase comienza en</p> */}
				<Countdown date={eventDate} renderer={renderer} />
			</div>
		</>
	);
};

export default Counter;

Counter.propTypes = {
	date: PropTypes.string,
};
