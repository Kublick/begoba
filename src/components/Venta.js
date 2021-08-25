import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Counter from '../components/Counter';
import {
	headerLogoBig,
	wswhite,
	bullet,
	regalo,
	Fblogo,
	Ytlogo,
	Instalogo,
	incrementaLogo,
} from '../components/helpers/logos';

import { StaticImage } from 'gatsby-plugin-image';
import { useWindowSize } from '../components/helpers/useWindowSize';

const Venta = () => {
	const [windowSize, setWindowSize] = useState('640');
	const size = useWindowSize();

	useEffect(() => {
		if (size.width < 720) {
			setWindowSize(320);
		} else if (size.width > 721) {
			setWindowSize(640);
		}
	}, [size]);

	const pagoFlexible = () => {
		window.open('https://pay.hotmart.com/W42168207B?off=5kj23v80');
	};

	const pagoUnico = () => {
		window.open('https://pay.hotmart.com/W42168207B?off=vjph7fq8');
	};

	return (
		<>
			<div className="flex flex-col items-center gap-4 mb-10">
				<h1 className="text-xl font-semibold md:text-3xl text-primary">
					Recuerda los bonos de accion rapida expiran en 24 horas
				</h1>
				<div className="flex items-center justify-center w-3/4 gap-2">
					<div className="hidden sm:inline-block">{regalo}</div>
					<div>
						<p className="text-lg">
							El primer bono de acción rápida es{' '}
							<span className="font-bold">
								ACCESO A 5 SESIONES INDIVIDUALES DE MENTORIA
							</span>{' '}
							uno a uno con Psicóloga Berenice Bastidas durante el entrenamiento
							donde podrás recibir de primera mano ayuda de mi parte enfocada
							únicamente en tu proyecto profesional.
						</p>
						<p>
							Valorado en{' '}
							<span className="font-semibold text-primary">$500 dólares</span>{' '}
						</p>
					</div>
				</div>
				<div className="flex items-center justify-center w-3/4 gap-2">
					<div className="hidden sm:inline-block">{regalo}</div>
					<div>
						<p className="text-lg">
							El segundo bono de acción rápida es{' '}
							<span className="font-bold">MANUAL HERRAMIENTAS DIGITALES</span>{' '}
							para que no tengas que pasar horas buscando herramientas buenas,
							este manual en lista las mejores herramientas digitales y
							plataformas con las que podrás trabajar y muchas de ellas en su
							versión gratuita.
						</p>
						<p>
							Valorado en{' '}
							<span className="font-semibold text-primary">$47 dólares</span>
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center py-4 bg-secondary ">
				<h1 className="px-4 text-2xl font-bold text-center text-white lg:px-0 md:w-1/2 lg:text-5xl">
					ELIGE EL PLAN QUE MEJOR SE ADAPTE A TÍ
				</h1>
			</div>
			<div className="md:mx-10">
				<div className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:gap-20">
					<div className="flex flex-col w-3/4 p-4 bg-white border-2 border-red-600 border-dashed lg:max-w-md md:w-1/2">
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
						<button
							className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark"
							onClick={pagoUnico}
						>
							Seleccionar
						</button>
					</div>
					<div className="flex flex-col w-3/4 p-4 bg-white border-2 border-red-600 border-dashed lg:max-w-md md:w-1/2">
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

						<button
							className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark"
							onClick={pagoFlexible}
						>
							Seleccionar
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<p className="px-8 text-center md:px-0 md:w-3/4 md:text-2xl">
					Si tienes alguna pregunta referente al entrenamiento puedes enviar un
					mensaje directamente aquí en el botón de WhatsApp aclaramos todas tus
					dudas.
				</p>
				<button
					className="flex items-center gap-4 px-8 py-4 my-10 text-xl font-semibold text-white bg-green-600 rounded-lg"
					onClick={() => window.open('https://wa.me/message/LD54V7JCH3TXD1')}
				>
					<span className="transform scale-150">{wswhite}</span> Quiero saber
					más información
				</button>
			</div>
			<div className="flex flex-col items-center py-10 bg-primary">
				<div className="w-1/2">
					<h2 className="my-10 text-2xl text-center text-white md:text-5xl">
						Triplicó su retorno de inversión antes de concluir el entrenamiento
					</h2>
				</div>
				<h2 className="mb-10 text-4xl text-white font-cursive">
					Video Testimonial
				</h2>
				<div>
					<ReactPlayer
						url={'https://youtu.be/z9CsFqeleUo'}
						width={windowSize}
						height={windowSize}
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<h2 className="my-10 text-2xl text-center md:text-5xl md:w-1/2">
					Todo esto es lo que recibes al momento de inscribirte al entrenamiento
					online incrementa tu consulta
				</h2>
			</div>
			<div className="flex justify-center">
				<StaticImage
					src="../images/03beneficios.png"
					className=""
					alt="beneficios"
				/>
			</div>
			<div className="px-10 py-10 my-10 bg-mango-light">
				<div className="flex justify-center mb-10">{headerLogoBig}</div>
				<div className="flex justify-center">
					<div className="w-3/4 border-b-2 border-secondary"></div>
				</div>
				<div className="grid gap-6 my-10 md:grid-cols-2">
					<div className="flex gap-2">
						<div className="w-6">{bullet}</div>
						<p>
							<span className="text-lg font-semibold text-primary">
								PROGRAMA INTENSIVO DE 12 SEMANAS 100% ONLINE
							</span>{' '}
							como te he mencionado el Entrenamiento INCREMENTA TU CONSULTA no
							es solo un curisto online, es{' '}
							<span className="font-semibold">
								TODO UN ENTRENAMIENTO CON UN PROGRAMA BIEN ESTRUCTURADO
							</span>{' '}
							que te muestra el camino paso a paso y click por click
							<span>
								<br /> Valorado en{' '}
								<span className="font-semibold text-primary">$997 dólares</span>
							</span>
						</p>
					</div>

					<div className="flex gap-2">
						<div className="w-6">{bullet}</div>
						<p>
							<span className="text-lg font-semibold text-primary">
								PERTENECER DE POR VIDA A LA COMUNIDAD INTERNACIONAL DE EXITOSAS
								Y EXITOSOS VIP
							</span>{' '}
							y mira que de todo lo que tiene el entrenamiento INCREMNETA TU
							CONSULTA el pertencer a la cominidad es algo invaluable por que
							dentro de ella podras ir compartiendo los avances que vayas
							logrando con tus compañeros.
							<span>
								<br /> Valorado en{' '}
								<span className="font-semibold text-primary">Invaluable</span>
							</span>
						</p>
					</div>
					<div className="flex gap-2">
						<div className="w-6">{bullet}</div>
						<p>
							<span className="text-lg font-semibold text-primary">
								12 MENTORIAS GRUPALES EN VIVO ONLINE
							</span>{' '}
							con Berenice Bastidas para obtener seguimiento, responder
							preguntas, aclarar dudas, obtener feedback de tus avances y
							ayudarte a lograr alcanzar tu meta. ¡Recuerda que tu ya eres
							éxito, solo hagamos que se manifieste!
							<span>
								<br /> Valorado en{' '}
								<span className="font-semibold text-primary">$597 dólares</span>
							</span>
						</p>
					</div>
					<div className="flex gap-2">
						<div className="w-6">{bullet}</div>
						<p>
							<span className="text-lg font-semibold text-primary">
								6 MODULOS DE TRABAJO CON LECCIONES DE VIDEO EN HD
							</span>{' '}
							donde siguiendo la estrategia DEPE avanzarás paso a paso de forma
							ordenada, enfocada pero sobre todo a tu ritmo por que tu eliges
							tus propios horario para ver las lecciones que ya temenos pre
							grabadas y lo puedes hacer desde tu computadora o desde tu
							celular.
						</p>
					</div>
					<div className="flex gap-2">
						<div className="w-6">{bullet}</div>
						<p>
							<span className="text-lg font-semibold text-primary">
								PLAN DE ESTUDIOS EN PDF
							</span>{' '}
							para que sepas exactamente en dónde debes de enfocarte cada
							semana, para así lograr avanzar a pasos seguros y que así ya nada
							te detenga triunfar.
							<span>
								<br /> Valorado en{' '}
								<span className="font-semibold text-primary">$47 dólares</span>
							</span>
						</p>
					</div>
					<div className="flex gap-2">
						<div className="w-6">{bullet}</div>
						<p>
							<span className="text-lg font-semibold text-primary">
								ACCESO POR TODO UN AǸO AL PORTAL ONLINE
							</span>{' '}
							para que así puedas ver y repetir las lecciones luego de concluir
							el programa las veces que tu preﬁeras.
							<span>
								<br /> Valorado en{' '}
								<span className="font-semibold text-primary">$497 dólares</span>
							</span>
						</p>
					</div>
					<div className="flex gap-2">
						<div className="w-6">{bullet}</div>
						<p>
							<span className="text-lg font-semibold text-primary">
								METAS SEMANALES DE TRABAJO
							</span>{' '}
							para que nada quede en teoría, cada lección te lleva a la acción
							con ejercicios detallados, de esta manera a medida que avanzas en
							el programa, también avanzas en tu negocio
						</p>
					</div>
					{/* <div className="flex gap-2">
						<div className="w-6">{bullet}</div>
						<p>
							<span className="text-lg font-semibold text-primary">
								ACCESO A 3 SESIONES INDIVIDUALES DE MENTORIA
							</span>{' '}
							uno a uno con la psicologa Berenice Bastidas durante el
							entrenamiento donde podrás recibir de primera mano información
							enfocada únicamente en tu proyecto profesional.
						</p>
					</div>
					<div className="flex gap-2">
						<div className="w-6">{bullet}</div>
						<p>
							<span className="text-lg font-semibold text-primary">
								MANUAL HERRAMIENTAS DIGITALES
							</span>{' '}
							para que no tengas que pasar horas buscando herramientas buenas,
							este manual en lista las mejores herramientas digitales y
							plataformas con las que podrás trabajar y muchas d e ellas en su
							version gratuita.
						</p>
					</div> */}
				</div>
			</div>
			<div className="">
				<div className="flex flex-col items-center justify-center">
					<h2 className="w-3/4 my-10 text-2xl text-center md:text-3xl lg:text-5xl">
						SI ACCEDES HOY, CONSIGUES ESTOS RECURSOS DE FORMA 100% GRATUITA
					</h2>
					<h2 className="flex p-4 text-2xl font-bold text-white rounded-lg bg-primary">
						Bonos de Regalo
					</h2>
					<div className="flex flex-col w-3/4 gap-4 py-10 md:w-1/2 md:mx-0">
						<div className="flex items-center gap-2">
							<div className="hidden sm:inline-block">{regalo}</div>
							<div>
								<p className="text-lg font-semibold text-secondary">
									BONO 1: TALLER METODOS DE PAGO ONLINE
								</p>
								<p>
									Aprenderás la metodología para recibir pagos por tus servicios
									de consulta desde diferentes países del mundo.
								</p>
								<p>
									Valorado en
									<span className="font-semibold text-primary">
										{' '}
										$197 dólares{' '}
									</span>
								</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div className="hidden sm:inline-block">{regalo}</div>
							<div>
								<p className="text-lg font-semibold text-secondary">
									BONO 2: TALLER HABLA FRENTE A LA CAMARA CON SEGURIDAD
								</p>
								<p>
									Perderás el miedo y la vergüenza de hablar en redes sociales.
								</p>
								<p>
									Valorado en
									<span className="font-semibold text-primary">
										{' '}
										$247 dólares{' '}
									</span>
								</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div className="hidden sm:inline-block">{regalo}</div>
							<div>
								<p className="text-lg font-semibold text-secondary">
									BONO 3: TALLER DE UNO MUCHOS
								</p>
								<p>
									Conocerás la forma de vender de uno a muchos mediante los
									webinars, esta estrategia te sirve para poder captar la mayor
									cantidad de clientes en el menor tiempo posible.
								</p>
								<p>
									Valorado en
									<span className="font-semibold text-primary">
										{' '}
										$147 dólares{' '}
									</span>
								</p>
							</div>
						</div>
						<p>
							Tendrás con el entrenamiento y los bonos accesos a mas de{' '}
							<span className="font-semibold line-through text-secondary">
								$2700 dólares
							</span>{' '}
							en contenido y recursos... por solo 6 pagos de{' '}
							<span className="font-semibold text-secondary">$97 dólares</span>{' '}
							(o un solo pago de{' '}
							<span className="font-semibold text-secondary">$497 dólares</span>
							).
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center py-4 mt-10 mb-5 bg-mango ">
					<h2 className="px-4 text-2xl font-bold text-center text-white lg:px-0 md:w-3/4 lg:text-4xl">
						¿Lista para crear la vida que sueñas?
					</h2>
					<h2 className="py-4 text-xl font-semibold text-center">
						ELIGE EL PLAN QUE MEJOR SE ADAPTE A TÍ
					</h2>
				</div>
				<div className="md:mx-10">
					<div className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:gap-20">
						<div className="flex flex-col w-3/4 p-4 bg-white border-2 border-red-600 border-dashed md:w-1/2 lg:max-w-md">
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
							<button
								className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark"
								onClick={pagoUnico}
							>
								Seleccionar
							</button>
						</div>
						<div className="flex flex-col w-3/4 p-4 bg-white border-2 border-red-600 border-dashed md:w-1/2 lg:max-w-md">
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

							<button
								className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark"
								onClick={pagoFlexible}
							>
								Seleccionar
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<h2 className="w-3/4 px-4 text-xl font-semibold text-center md:text-3xl md:w-1/2">
						Entrenamiento{' '}
						<span className="font-semibold text-primary">INCREMENTA</span>{' '}
						<span className="font-semibold text-secondary">TU CONSULTA</span>{' '}
						cierra las inscripciones en:
					</h2>
					<div className="py-5">
						<Counter date={'01 October 2021 23:59:00'} />
					</div>
					<p className="w-3/4 px-8 text-center md:px-0 md:w-3/4 md:text-2xl">
						Si tienes alguna pregunta referente al entrenamiento puedes enviar
						un mensaje directamente aquí en el botón de WhatsApp aclaramos todas
						tus dudas.
					</p>

					<button
						className="flex items-center gap-4 px-8 py-4 my-10 text-xl font-semibold text-white bg-green-600 rounded-lg"
						onClick={() => window.open('https://wa.me/message/LD54V7JCH3TXD1')}
					>
						<span className="transform scale-150">{wswhite}</span> Quiero saber
						más información
					</button>
				</div>
			</div>
			<div className="flex flex-col items-center py-10 bg-primary">
				<div className="flex justify-center px-10 ">
					<h2 className="text-lg text-center text-white lg:px-0 lg:text-2xl">
						Mira las historias inspiradoras, los casos de éxito de alumnas que
						ya tomaron el entrenamiento incrementa tu consulta.
					</h2>
				</div>
				<h2 className="my-4 text-3xl text-mango font-cursive">
					¿Serás la próxima?
				</h2>
				<div className="grid md:grid-cols-2 gap-x-10">
					<div className="my-10">
						<ReactPlayer
							url="https://youtu.be/NmL3jxP9BB0"
							width={320}
							height={320}
						/>
					</div>
					<div className="my-10">
						<ReactPlayer
							url="https://youtu.be/c1XGvy-ynZs"
							width={320}
							height={320}
						/>
					</div>
					<div className="my-10">
						<ReactPlayer
							url="https://youtu.be/E_Vtjlfbke4"
							width={320}
							height={320}
						/>
					</div>
					<div className="my-10">
						<ReactPlayer
							url="https://youtu.be/z9CsFqeleUo"
							width={320}
							height={320}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="grid md:grid-cols-2 justify-items-center gap-x-10">
					<div className="my-10">
						<ReactPlayer
							url="https://youtu.be/z9CsFqeleUo"
							width={320}
							height={320}
						/>
					</div>

					<div className="my-10">
						<ReactPlayer
							url="https://youtu.be/z9CsFqeleUo"
							width={320}
							height={320}
						/>
					</div>
				</div>
				<div>
					<div className="flex justify-center">
						<StaticImage
							src="../images/03beneficios.png"
							className=""
							alt="beneficios"
						/>
					</div>
				</div>
				<div className="grid gap-2 lg:grid-cols-3">
					<div className="flex items-center justify-center">
						{incrementaLogo}
					</div>

					<div>
						<p className="mx-2 text-center footer-text">
							Legal Terms - Acerca de las politicas de privacidad y uso de
							cookies Incrementa tu consulta Derechos reservados 2021
							https://incrementatuconsulta.com Psicologa Berenice Bastidas
							Mexicali Baja California, México Whatsapp: + 52 (686) 234-9366
						</p>
					</div>
					<div className="flex items-center justify-center gap-3">
						<Fblogo data="#000" />
						<Ytlogo data="#000" />
						<Instalogo data="#000" />
					</div>
				</div>
				<div className="px-10 py-4">
					<p className="text-black text-mini">
						Este sitio no forma parte del sitio de Facebook o Facebook Inc.
						Además, este sitio NO está respaldado por Facebook de ninguna
						manera. FACEBOOK es una marca registrada de FACEBOOK, Inc. Cuando se
						registre para este taller gratuito, ocasionalmente recibirá correos
						electrónicos gratuitos, consejos útiles, videos y actualizaciones
						para hacer crecer tu lista de pacientes y temas relacionados.
						Estamos compartiendo lo que hemos aprendido de nuestras experiencias
						y la de nuestros estudiantes del entrenamiento incrementa tu
						consulta y esta información no es garantía de ganancias o
						resultados. Si desea dejar de recibir nuestros correos electrónicos,
						puede darse de baja en cualquier momento que así lo desee,
						utilizando el enlace para des suscribirse que aparecerá en los
						correos electrónicos.
					</p>
				</div>
			</div>
		</>
	);
};

export default Venta;
