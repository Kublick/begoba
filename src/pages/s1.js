import React from 'react';
import SesionHeader from '../components/SesionHeader';

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
					</div>
					<div className="col-span-2 bg-primary-light">Video</div>
					<div>right sidebar</div>
				</div>
			</main>
			<footer>{/* fbcomments */}</footer>
		</>
	);
};

export default S1;
