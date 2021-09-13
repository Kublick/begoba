import React from 'react';
import { mainLogo } from '../components/helpers/logos';

const Formfilled = () => {
	return (
		<div>
			<div className="flex justify-center transform scale-75">{mainLogo}</div>
			<div className="p-8 bg-primary-light lg:px-20">
				<p className="text-2xl text-center text-secondary font-cursive">
					Gracias por llenar el formulario
				</p>
			</div>
		</div>
	);
};

export default Formfilled;
