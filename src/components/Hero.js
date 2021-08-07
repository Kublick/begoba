import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import { mainLogo } from './helpers/logos';
import Formulario from './Formulario';

const Hero = () => {
	// const data = useStaticQuery(
	// 	graphql`
	// 		query {
	// 			redes: file(relativePath: { eq: "berenice.jpg" }) {
	// 				childImageSharp {
	// 					fluid(quality: 90, maxWidth: 111) {
	// 						...GatsbyImageSharpFluid_withWebp
	// 					}
	// 				}
	// 			}
	// 		}
	// 	`,
	// );

	// console.log(data.redes.childImageSharp.fluid);

	return (
		<section className="grid grid-cols-2 py-8 pt-8 bg-gray-100">
			<div className="flex flex-col items-center">
				<span className="mb-6">{mainLogo}</span>
				<div className="flex flex-col items-center">
					<p className="text-2xl">te invita al</p>
					<h1 className="mb-4 text-3xl font-bold uppercase text-primary">
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
					<p className="px-4 py-1 mt-4 text-lg text-white rounded-full bg-secondary">
						Del 20 al 24 de Septiembre 2021
					</p>
				</div>
			</div>
			<div className="text-center align-middle">
				<p className="text-xl text-gray-500">
					En solo 5 dias descubrirás la estrategia PROBADA
				</p>
				<h2 className="py-4 text-4xl font-bold text-primary">
					Para conseguir pacientes
				</h2>
				<h2 className="mb-4 text-4xl font-bold text-primary">
					en redes sociales
				</h2>
				<p className="text-xl text-gray-500">
					Tu próximo paciente a un click de distancia
				</p>
				<Formulario />
			</div>
		</section>
	);
};

export default Hero;
