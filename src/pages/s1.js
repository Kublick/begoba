import React from 'react';
import { fbwhite, wswhite, notebookWhite } from '../components/helpers/logos';
import SesionHeader from '../components/SesionHeader';
import Videoplayer from '../components/Videoplayer';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import CommentsFacebook from '../components/CommentsFacebook';
import ReactPlayer from 'react-player';

const S1 = () => {
	return (
		<>
			<header>
				<SesionHeader color="bg-mango" date="20 September 2021 15:30" />
			</header>
			<main>
				<div className="grid grid-cols-4">
					<div className="flex flex-col gap-6 p-10">
						<div className="p-4 rounded-lg shadow-lg bg-secondary">
							<div className="flex items-center">
								<h2 className="text-3xl font-bold text-white">TIP</h2>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 ml-2 font-bold"
									viewBox="0 0 24 24"
									stroke="#fff"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M16 17l-4 4m0 0l-4-4m4 4V3"
									/>
								</svg>
							</div>
							<p className="block font-semibold text-white">
								¿No pudiste tomar nota o tienes dudas?
							</p>
							<p className="block text-white">¡No te preocupes!</p>
						</div>
						<h1 className="text-lg font-semibold text-primary">
							Cuéntanos en que podamos ayudarte:
						</h1>
						<p>
							¿Cual es el mayor desafío que tuviste al querer ofrecer o vender
							tus servicios profesionales en redes sociales?
						</p>
						<p className="font-semibold">!Nos vemos en los comentarios!</p>
						<div className="flex flex-col items-center gap-4">
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

					<div className="col-span-2 py-8 bg-gray-100 shadow-lg">
						<div className="flex flex-col gap-6">
							<h1 className="self-center text-2xl font-semibold text-center md:w-3/4 text-secondary">
								Tu oportunidad de tener pacientes desde las redes sociales
							</h1>
							<div>
								<Videoplayer url={'https://youtu.be/M4V8T0hl7cA'} />
							</div>

							<p
								className="self-center font-semibold "
							>
								<span className="font-bold  text-secondary">CLASE:</span> 1 DE 4
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-8 p-10">
						<div className="">
							<Link to="/s2">
								<StaticImage
									src="../images/Miniaturas 640px-02.png"
									className="rounded-md shadow-lg"
									alt="foto sesion 2"
								/>
							</Link>
						</div>
						<div className="">
							<StaticImage
								src="../images/Miniaturas 640px-03.png"
								className="rounded-md shadow-lg"
								alt="foto sesion 3"
							/>
						</div>
						<div>
							<StaticImage
								src="../images/Miniaturas 640px-04.png"
								className="rounded-md shadow-lg"
								alt="foto sesion 3"
							/>
						</div>
					</div>
				</div>
			</main>
			<div className="grid grid-cols-2 gap-8 p-10 bg-gray-50">
				<div>
					<CommentsFacebook />
				</div>
				<div className="flex flex-col items-center p-4">
					<ReactPlayer
						url="https://youtu.be/iGA3w0YVac8"
						width={320}
						height={320}
					/>

					<ReactPlayer
						url="https://youtu.be/c1XGvy-ynZs"
						width={320}
						height={320}
					/>

					<ReactPlayer
						url="https://youtu.be/NmL3jxP9BB0"
						width={320}
						height={320}
					/>
					<ReactPlayer
						url="https://youtu.be/6_MBqp7E3Zw"
						width={320}
						height={320}
					/>

					<ReactPlayer
						url="https://youtu.be/gpXgrVIJrms"
						width={320}
						height={320}
					/>
				</div>
			</div>
		</>
	);
};

export default S1;
