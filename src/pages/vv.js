import React from 'react';
import Countdown from 'react-countdown';
import { headerLogo } from '../components/helpers/logos';
import Venta from '../components/Venta';
import Videoplayer from '../components/Videoplayer';

const VideoVenta = () => {
	let view = false;

	const renderer = ({ days, hours, minutes, seconds }) => {
		let queda = 'Quedan';
		let dias = 'días';
		if (days < 2) {
			dias = 'dia';
			queda = 'Queda';
		}

		return (
			<div className="text-center">
				{days < 1 ? (
					<p>
						Ultimo Dia hoy cerramos inscripciones
						<br /> {hours} horas {minutes} minutos {seconds} segundos{' '}
					</p>
				) : (
					<p className="text-xl lg:text-5xl">
						{queda} {days} {dias} y se cierran inscripciones
					</p>
				)}
			</div>
		);
	};

	const eventDate = new Date('27 January 2022 15:30');

	return (
		<>
			{view ? (
				<div>
					<div className="py-10 bg-gray-100">
						<div className="flex justify-center my-4">
							<span className="mb-4 transform scale-125">{headerLogo} </span>
						</div>

						<div className="flex flex-col items-center gap-2 py-6 font-bold text-white bg-mango">
							<Countdown date={eventDate} renderer={renderer} />
						</div>

						<div className="flex flex-col gap-4 py-10">
							<div className="col-span-2 px-10">
								<Videoplayer
									url={'https://youtu.be/yIDbOJEKJRM'}
									controls={false}
								/>
							</div>
							<div className="flex flex-col items-center gap-4 mt-4 md:text-lg ">
								<h1 className="text-xl font-bold text-center md:text-3xl">
									¡Tu ya eres éxito! Solo hagamos que se manifieste
								</h1>
							</div>
						</div>
						<Venta />
					</div>
				</div>
			) : null}
		</>
	);
};

export default VideoVenta;
