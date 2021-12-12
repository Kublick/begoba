import React from 'react';
import { mainLogo } from '../components/helpers/logos';

const Regalo = () => {
	const redirect = () => {
		window.open(
			'https://incrementafiles.s3.us-west-1.amazonaws.com/Manual+del+Taller+Internacional_01.pdf',
		);
	};

	return (
		<div>
			<div className="flex justify-center transform scale-75">{mainLogo}</div>
			<div className="flex justify-center">
				<div className="mx-2 mt-8">
					<h1 className="text-2xl font-bold text-center text-primary ">
						!Felicitaciones por haber tomado acción nos vemos en el taller!
					</h1>

					<h1 className="text-xl font-bold text-center">
						Ya pudes descargar tu manual
					</h1>
					<img
						src="https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/source.gif"
						className="mx-auto"
						alt="regalo"
					/>
					<div className="flex justify-center">
						<button className="px-10 py-2 btn-main" onClick={() => redirect()}>
							Abrir mi Regalo
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Regalo;
