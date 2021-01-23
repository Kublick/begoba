import React from "react";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import Formulario from "./Formulario";

const Hero = () => {
	const data = useStaticQuery(
		graphql`
			query {
				desktop: file(relativePath: { eq: "hero.png" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1080) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`
	);

	const imageData = data.desktop.childImageSharp.fluid;

	return (
		<>
			<BackgroundImage fluid={imageData} className="bg">
				<div className="texto-imagen lg:flex-row">
					<h1 className="flex items-center justify-center px-4 py-8 my-8 text-2xl text-center text-red-600 bg-white lg:w-64 lg:h-64">
						Conoce la estrategia que ha logrado que psicólogos incremente su
						número de pacientes.
					</h1>
					<h1 className="flex items-center justify-center w-64 my-8 text-2xl text-white bg-red-600 lg:h-64">
						Regístrate Aquí
					</h1>
					<div className="p-4 ml-2 bg-white rounded-lg">
						<Formulario />
					</div>
				</div>
			</BackgroundImage>
		</>
	);
};

export default Hero;
