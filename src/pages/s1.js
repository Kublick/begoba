import React from 'react';
import { fbwhite, wswhite, notebookWhite } from '../components/helpers/logos';
import SesionHeader from '../components/SesionHeader';
import Videoplayer from '../components/Videoplayer';

const S1 = () => {
	return (
		<>
			<header>
				<SesionHeader />
			</header>
			<main>
				<div className="grid grid-cols-4">
					<div className="flex flex-col gap-4 p-10">
						<h1 className="text-lg font-semibold text-primary">
							Cuéntanos en que podamos ayudarte:
						</h1>
						<p>
							¿Cual es el mayor desafío que tuviste al querer ofrecer o vender
							tus servicios profesionales en redes sociales?
						</p>
						<p className="font-semibold">!Nos vemos en los comentarios!</p>
						<div className="flex flex-col gap-4">
							<button className="bg-secondary btn-social">
								{notebookWhite} Cuaderno de Trabajo
							</button>

							<button className="bg-green-600 btn-social">
								{wswhite} Comunidad en Whatsapp
							</button>
							<button className=" btn-social bg-primary">
								{fbwhite} No te pierdas de Nada
							</button>
						</div>
					</div>

					<div className="col-span-2 p-4 pt-10 bg-gray-100 shadow-lg">
						<div className="flex flex-col items-center gap-4">
							<h1 className="text-2xl font-semibold text-center text-secondary">
								Tu oportunidad de tener pacientes desde las redes sociales
							</h1>
							<Videoplayer />

							<p className="font-semibold">
								<span className="font-bold text-secondary">CLASE:</span> 1 DE 4
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-4 p-10">
						<div className="w-64 h-32 bg-gray-400">
							<h1>Video Clase 2</h1>
						</div>
						<div className="w-64 h-32 bg-gray-400">
							<h1>Video Clase 3</h1>
						</div>
						<div className="w-64 h-32 bg-gray-400">
							<h1>Video Clase 4</h1>
						</div>
						<div className="w-64 h-32 bg-gray-400">
							<h1>Video Sesion Especial</h1>
						</div>
					</div>
				</div>
			</main>
			<footer>{/* fbcomments */}</footer>
		</>
	);
};

export default S1;
