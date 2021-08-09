import React from 'react';
import Counter from './Counter';
import { headerLogo } from './helpers/logos';

const SesionHeader = () => {
	return (
		<div className="grid gap-2 md:grid-cols-3 bg-secondary">
			<div className="flex justify-center ">
				<div className="w-64 p-6 bg-white rounded-b-lg shadow-xl h-3/4">
					<span className="transform scale-75">{headerLogo}</span>
				</div>
			</div>
			<div className="flex items-center justify-center gap-2">
				<p className="font-bold text-right text-white">
					La clase <br />
					comienza en:
				</p>
				<Counter />
			</div>
			<div>
				<div className="flex justify-center">
					<div className="w-64 min-h-full p-8 bg-primary">
						<p className="font-bold text-secondary">Taller Gratuito</p>
						<p className="font-semibold text-white">
							Consigue pacientes en redes sociales
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SesionHeader;
