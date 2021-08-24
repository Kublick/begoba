import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

const SesionHeader = ({ color, date }) => {
	return (
		<div className={`grid gap-2 md:grid-cols-3 bg-secondary ${color}`}>
			<div className="flex justify-center">
				<div className="w-48 px-6 pb-6 bg-white rounded-b-lg shadow-xl lg:w-64 h-3/4">
					<div className="">
						<StaticImage
							src="../images/Incremnta_lateral.png"
							className="mt-4"
							alt="foto sesion 2"
						/>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center gap-2">
				<p className="text-sm font-bold text-right text-white lg:text-md">
					La clase <br />
					comienza en:
				</p>
				<Counter date={date} />
			</div>
			<div>
				<div className="flex justify-center">
					<div className="hidden w-48 p-4 lg:p-8 lg:w-64 bg-primary md:block">
						<p className="text-sm font-bold lg:text-md text-secondary">
							Taller Gratuito
						</p>
						<p className="text-sm font-semibold text-white lg:text-base">
							Consigue pacientes en redes sociales
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SesionHeader;

SesionHeader.propTypes = {
	color: PropTypes.string,
	date: PropTypes.string,
};
