import React, { useState, useRef } from 'react';
import SesionHeader from '../components/SesionHeader';
import Videoplayer from '../components/Videoplayer';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Venta from '../components/Venta';

const S4 = () => {
	let view = true;

	// useEffect(() => {
	// 	navigate('/');
	// }, []);

	const [show, setShow] = useState(false);
	const [point, setPoint] = useState(false);
	const ventaRef = useRef();

	let date = 'January 27 2022 17:08:10';

	function timing() {
		setInterval(() => {
			let tempdate = date;
			let currentDate = Date.now();

			if (new Date(currentDate) > new Date(tempdate)) {
				setShow(true);
			}
			setPoint(true);
		}, 10000);
	}
	timing();

	if (point === true) {
		ventaRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<>
			{view ? (
				<div>
					<header>
						<SesionHeader color="bg-primary" date="27 January 2022 15:30" />
					</header>
					<main>
						<div className="grid lg:grid-cols-4">
							<div className="flex flex-col order-last gap-2 p-2 md:order-none lg:gap-6 lg:p-10">
								<h1 className="text-lg font-semibold text-center text-primary">
									¡ATENCIÓN!
								</h1>
								<p>
									Dado que los cupos son limitados y que el proceso de
									inscripción solo estará abierto unos pocos días hemos
									habilitado una lista prioritaria, ahí puedes dejarnos tus
									datos rellenando el formulario y de esta forma sabremos qué
									quieres tomar acción cuanto antes para no quedarte afuera de
									esta promoción.
								</p>

								<div className="flex justify-center mt-8">
									<button
										className="px-8 font-semibold text-white btn-main-mango"
										onClick={() =>
											window.open('https://es.surveymonkey.com/r/9DNKNP6')
										}
									>
										LLenar el Formulario
									</button>
								</div>
							</div>

							<div className="order-first py-8 bg-gray-100 shadow-lg lg:col-span-2 lg:order-none">
								<div className="flex flex-col gap-2 md:gap-6">
									<h1 className="self-center text-2xl font-semibold text-center md:w-3/4 text-secondary">
										La estrategia para hacer crecer tu lista de pacientes
									</h1>
									<div>
										<Videoplayer
											url={'https://youtu.be/q0LBG3uvFV4'}
											controls={false}
										/>
									</div>

									<p className="self-center font-semibold ">
										<span className="font-bold text-secondary">CLASE:</span> 4
										DE 4
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
								</div>
								<div className="">
									<Link to="/s2">
										<StaticImage
											src="../images/Miniaturas 640px-02.png"
											className="rounded-md shadow-lg"
											alt="foto sesion 3"
										/>
									</Link>
								</div>
								<div className="">
									<Link to="/s3">
										<StaticImage
											src="../images/Miniaturas 640px-03.png"
											className="rounded-md shadow-lg"
											alt="foto sesion 3"
										/>
									</Link>
								</div>
							</div>
						</div>
					</main>
					<div className="my-10" ref={ventaRef}>
						{show ? <Venta /> : null}
					</div>
				</div>
			) : null}
		</>
	);
};

export default S4;
