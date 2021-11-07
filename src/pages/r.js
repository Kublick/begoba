import React from 'react';
import { headerLogo } from '../components/helpers/logos';

const Regalo = () => {
	if (typeof window !== 'undefined') {
		if (window.fbq != null) {
			// window.fbq("track", "PageView");
			window.fbq('track', 'ViewContent');
		}
	}

	return (
		<>
			<div className="py-10 bg-gray-100">
				<div className="flex justify-center my-4">
					<span className="mb-4 transform scale-125">{headerLogo} </span>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center my-10">
				<h1 className="text-2xl font-bold text-center text-primary">
					!Felicidades por haber tomado acción y gracias por tu confianza!
				</h1>
				<img
					src="https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/source.gif"
					className="regalo__img"
					alt="regalo"
				/>
				<button
					className="px-6 btn-main"
					onClick={() =>
						window.open(
							'https://incrementafiles.s3.us-west-1.amazonaws.com/Nueva+Plantilla.pdf',
						)
					}
				>
					Abrir mi Regalo
				</button>
			</div>
		</>
	);
};

export default Regalo;
