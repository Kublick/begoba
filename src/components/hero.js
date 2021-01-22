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
						fluid(quality: 90, maxWidth: 1920) {
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
			<BackgroundImage tag="section" fluid={imageData} className="mx-auto bg">
				<div className="container flex items-baseline mx-auto">
					<div className="w-1/3 h-64 text-center align-middle bg-white">
						<h1 className="text-3xl text-red-600 ">
							Conoce la estrategia que ha logrado que psicólogos incremente su
							número de pacientes.
						</h1>
					</div>
					<div className="w-1/3 h-64 text-center bg-red-600 ">
						<h1 className="items-center text-3xl text-white ">
							Regístrate Aquí
						</h1>
					</div>
					<div className="w-1/3 bg-white">
						<Formulario />
					</div>
				</div>
			</BackgroundImage>
		</>
	);
};

export default Hero;
