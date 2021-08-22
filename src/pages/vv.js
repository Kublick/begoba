import React from 'react';

import { mainLogo } from '../components/helpers/logos';
import Venta from '../components/Venta';
import Videoplayer from '../components/Videoplayer';

const VideoVenta = () => {
	return (
		<>
			<div className="py-10 bg-gray-100">
				<div className="flex justify-center my-4">{mainLogo}</div>
				<div className="flex items-center justify-center py-4 bg-primary">
					<h1 className="px-4 text-2xl font-bold text-center text-white lg:px-0 md:w-3/4 lg:text-5xl">
						¡TU PRÓXIMO PACIENTE A UN CLICK DE DISTANCIA!
					</h1>
				</div>
				<div className="flex flex-col gap-4 py-10">
					<div className="col-span-2 px-10">
						<Videoplayer url={'https://youtu.be/V71rXExM7ug'} />
					</div>
					<div className="flex flex-col items-center gap-4 px-10 md:text-lg ">
						<p>
							Mira la grabación de la clase 4 para conocer paso a paso la
							estrategia DEPE la cual es tu puente para catapultar tu consulta y
							llevarla al siguiente nivel.
						</p>
						<p>
							En esta clase de muestro al 100% cómo tanto otros profesionales y
							yo hemos logrado conseguir pacientes con la estrategia DEPE
							mientras al mismo tiempo estamos creando nuestra libertad
							profesional, logrando vivir de nuestro propósito de vida.
						</p>
						<h1 className="text-xl font-bold text-center text-secondary md:text-3xl">
							¡Tu ya eres un éxito! Solo hagamos que se manifieste
						</h1>
					</div>
				</div>
				<Venta />
			</div>
		</>
	);
};

export default VideoVenta;
