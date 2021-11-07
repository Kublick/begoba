import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import { mainLogo } from './helpers/logos';
import Formulario from './Formulario';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';

const Hero = (props) => {
	return (
		<section className="grid pb-6 bg-gray-100 md:py-8 md:grid-cols-2">
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
						Del 17 al 21 de Enero 2022
					</p>
				</div>
			</div>
			<div className="text-center align-middle">
				<p
					className="px-2 my-2 text-md md:text-xl text-primary"
					ref={props.formRef}
				>
					<span className="font-semibold ">
						Descubre la estrategia comprobada
					</span>{' '}
					para conseguir pacientes en redes sociales, aunque no tengas
					experiencia previa ni conocimientos o estudios de marketing.
				</p>

				<Formulario />
				<div className="mt-8 text-2xl">
					<p>La oportunidad de registro expira en:</p>
					<Countdown date={Date.now() + 4000000} />
				</div>
				<p className="py-2 font-semibold font-3xl text-primary">
					Descubre como ofrecer <br /> y vender tu consulta online
				</p>
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
