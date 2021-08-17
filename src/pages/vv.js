import React from 'react';
import ReactPlayer from 'react-player';
import Counter from '../components/Counter';
import {
	headerLogoBig,
	mainLogo,
	whitelogoBig,
	wswhite,
} from '../components/helpers/logos';
import Videoplayer from '../components/Videoplayer';

const VideoVenta = () => {
	return (
		<>
			<div className="py-10 bg-gray-100">
				<div className="flex justify-center my-4">{mainLogo}</div>
				<div className="flex justify-center py-4 bg-primary">
					<h1 className="px-4 text-2xl font-bold text-center text-white lg:px-0 md:w-1/2 lg:text-5xl">
						¡TU PRÓXIMO PACIENTE A UN CLICK DE DISTANCIA!
					</h1>
				</div>
				<div className="grid grid-cols-3 gap-4 py-10">
					<div className="pl-8 md:text-lg">
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
						<h1 className="py-4 text-xl font-bold text-secondary md:text-3xl">
							¡Tu ya eres un éxito!
						</h1>
						<p>Solo hagamos que se manifieste</p>
					</div>
					<div className="col-span-2 px-10">
						<Videoplayer url={'https://youtu.be/V71rXExM7ug'} />
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 py-4">
					<p className="text-center md:text-2xl">
						Entrenamiento{' '}
						<span className="font-bold"> INCREMENTA TU CONSULTA</span> cierra
						las inscripciones en:
					</p>
					<Counter date={'01 October 2021 23:59:00'} />
				</div>
				<div className="flex justify-center py-4 mt-10 mb-5 bg-secondary ">
					<h1 className="px-4 text-2xl font-bold text-center text-white lg:px-0 md:w-1/2 lg:text-5xl">
						ELIGE EL PLAN QUE MEJOR SE ADAPTE A TÍ
					</h1>
				</div>
				<div className="flex flex-col justify-center py-10 md:flex-row md:gap-20">
					<div className="flex flex-col w-1/4 p-4 bg-white border-2 border-red-600 border-dashed">
						<h2 className="p-4 text-xl font-bold text-center text-white bg-mango md:text-2xl">
							PAGO ÚNICO
						</h2>
						<p className="py-4 text-lg text-center md:text-xl">
							Ahorra $86 dólares
						</p>
						<p className="py-4 text-lg text-center md:text-xl">Pago Único</p>
						<h2 className="text-2xl font-bold text-center md:text-3xl">
							$497 dólares
						</h2>
						<button className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark">
							Seleccionar
						</button>
					</div>
					<div className="flex flex-col w-1/4 p-4 bg-white border-2 border-red-600 border-dashed">
						<h2 className="p-4 text-xl font-bold text-center text-white bg-mango md:text-2xl">
							PLAN FLEXIBLE
						</h2>
						<p className="py-4 text-lg text-center md:text-xl">
							Paga a tu ritmo
						</p>
						<p className="py-4 text-lg text-center md:text-xl">
							6 pagos mensuales de
						</p>
						<h2 className="text-2xl font-bold text-center md:text-3xl">
							$97 dólares
						</h2>
						<button className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark">
							Seleccionar
						</button>
					</div>
					transform scale-125
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="px-8 text-center md:px-0 md:w-1/2 md:text-2xl">
						Si tienes alguna pregunta referente al entrenamiento puedes enviar
						un mensaje directamente aquí en el botón de WhatsApp aclaramos todas
						tus dudas.
					</p>
					<button className="flex items-center gap-4 px-8 py-4 my-10 text-xl font-semibold text-white bg-green-600 rounded-lg">
						<span
							className="transform scale-150"
							onClick={() =>
								window.open('https://wa.me/message/LD54V7JCH3TXD1')
							}
						>
							{wswhite}
						</span>{' '}
						Comunidad en Whatsapp
					</button>
				</div>
				<div className="flex flex-col items-center py-10 bg-primary">
					<div className="my-4 ">{whitelogoBig}</div>
					<div className="w-1/2">
						<h2 className="my-10 text-2xl text-center text-white md:text-5xl">
							Triplicó su retorno de inversión antes de concluir el
							entrenamiento
						</h2>
					</div>
					<h2 className="text-4xl text-white font-cursive">
						Video Promocional
					</h2>
					<div className="my-10">
						<ReactPlayer
							url="https://youtu.be/z9CsFqeleUo"
							width={640}
							height={640}
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<h2 className="my-10 text-2xl text-center md:text-5xl md:w-1/2">
						Todo esto es lo que recibes al momento de inscribirte al
						entrenamiento online incrementa tu consulta
					</h2>
				</div>
				<h3>Imagen</h3>
				<div className="py-10 my-10 bg-mango-light">
					<div className="flex justify-center mb-10">{headerLogoBig}</div>
					<div className="flex justify-center">
						<div className="w-3/4 border-b-2 border-secondary"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default VideoVenta;
