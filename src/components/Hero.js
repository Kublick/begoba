import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import { mainLogo } from './helpers/logos';
import Formulario from './Formulario';
import PropTypes from 'prop-types';

const Hero = (props) => {
	return (
		<section className="grid bg-gray-100 md:py-8 md:grid-cols-2">
			<div className="flex flex-col items-center justify-center">
				<span className="transform scale-75 md:scale-100 md:mb-4">
					{mainLogo}
				</span>
				<div className="flex flex-col items-center">
					<p className="text-xl md:text-2xl">te invita al</p>
					<h1 className="text-2xl font-bold uppercase md:mb-4 md:text-3xl text-primary">
						Taller Gratuito
					</h1>
					<div className="flex gap-3 justify-items-center">
						<p className="text-center uppercase">
							<span className="text-2xl font-bold">vende</span> <br /> tu
							consulta
						</p>
						<div className="border-l-8 border-mango" />
						<p className="text-center uppercase">
							<span className="text-2xl font-bold">gana</span> <br /> lo que
							mereces
						</p>
					</div>
					<p className="px-4 py-1 m-2 text-lg text-white rounded-full bg-secondary">
						Del 20 al 24 de Septiembre 2021
					</p>
				</div>
			</div>
			<div className="text-center align-middle">
				<p className="text-gray-500 text-md md:text-xl">
					En solo 5 dias descubrirás la estrategia PROBADA
				</p>
				<h2 className="text-2xl font-bold md:py-4 md:text-4xl text-primary">
					Para conseguir pacientes en redes sociales
				</h2>

				<p ref={props.formRef} className="text-gray-500 md:text-xl">
					Tu próximo paciente a un click de distancia
				</p>
				<Formulario />
			</div>
		</section>
	);
};

export default Hero;

Hero.propTypes = {
	formRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.any }),
	]),
};
