import React from 'react';
import { fbwhite, wswhite, notebookWhite } from '../components/helpers/logos';
import SesionHeader from '../components/SesionHeader';
import Videoplayer from '../components/Videoplayer';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import CommentsFacebook from '../components/CommentsFacebook';
import ReactPlayer from 'react-player';

const S2 = () => {
	return (
		<>
			<header>
				<SesionHeader color="bg-primary" date="21 September 2021 15:30" />
			</header>
			<main>
				<div className="grid lg:grid-cols-4">
					<div className="flex flex-col order-last gap-2 p-2 md:order-none lg:gap-6 lg:p-10">
						<h1 className="text-lg font-semibold text-primary">
							Cuéntanos en que podamos ayudarte:
						</h1>
						<p>
							¿Cual es el mayor desafío que tuviste al querer ofrecer o vender
							tus servicios profesionales en redes sociales?
						</p>
						<p className="font-semibold">!Nos vemos en los comentarios!</p>
						<div className="flex flex-col items-center gap-4 mx-2">
							<button className="bg-secondary btn-social">
								{notebookWhite} Cuaderno de Trabajo
							</button>

							<button className="bg-green-600 btn-social">
								{wswhite} Grupo en Whatsapp
							</button>
							<button className=" btn-social bg-primary">
								{fbwhite} No te lo pierdas
							</button>
						</div>
					</div>

					<div className="order-first py-8 bg-gray-100 shadow-lg lg:col-span-2 lg:order-none">
						<div className="flex flex-col gap-2 md:gap-6">
							<h1 className="self-center text-2xl font-semibold text-center md:w-3/4 text-secondary">
								Derriba tus miedos y da ese siguiente paso para vivir de tu
								consulta
							</h1>
							<div>
								<Videoplayer url={'https://youtu.be/V71rXExM7ug'} />
							</div>

							<p className="self-center font-semibold ">
								<span className="font-bold text-secondary">CLASE:</span> 4 DE 4
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
						<div className="">
							<Link to="/s1">
								<StaticImage
									src="../images/Miniaturas 640px-01.png"
									className="rounded-md shadow-lg"
									alt="foto sesion 1"
								/>
							</Link>
							<div className="flex justify-end flex-grow-0">
								<p className="px-1 text-xl font-bold text-white p bg-mango">
									YA
								</p>
								<p className="px-1 text-xl font-bold text-white bg-secondary">
									DISPONIBLE
								</p>
							</div>
						</div>
						<div className="">
							<Link to="/s2">
								<StaticImage
									src="../images/Miniaturas 640px-02.png"
									className="rounded-md shadow-lg"
									alt="foto sesion 3"
								/>
							</Link>
							<div className="flex justify-end flex-grow-0">
								<p className="px-1 text-xl font-bold text-white p bg-mango">
									YA
								</p>
								<p className="px-1 text-xl font-bold text-white bg-secondary">
									DISPONIBLE
								</p>
							</div>
						</div>
						<div className="">
							<Link to="/s3">
								<StaticImage
									src="../images/Miniaturas 640px-03.png"
									className="rounded-md shadow-lg"
									alt="foto sesion 3"
								/>
							</Link>
							<div className="flex justify-end flex-grow-0">
								<p className="px-1 text-xl font-bold text-white p bg-mango">
									YA
								</p>
								<p className="px-1 text-xl font-bold text-white bg-secondary">
									DISPONIBLE
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<div className="grid gap-6 pt-8 mx-2 md:grid-cols-2 bg-gray-50">
				<div>
					<CommentsFacebook />
				</div>

				<div className="flex flex-col items-center p-4">
					<h1 className="mb-4 text-2xl font-bold text-secondary">
						Testimonios
					</h1>
					<ReactPlayer
						url="https://youtu.be/z9CsFqeleUo"
						width={320}
						height={320}
					/>

					<ReactPlayer
						url="https://youtu.be/4G_j_Qk7Gvc"
						width={320}
						height={320}
					/>

					<ReactPlayer
						url="https://youtu.be/wXHrOaaJZoM"
						width={320}
						height={320}
					/>
				</div>
			</div>
		</>
	);
};

export default S2;