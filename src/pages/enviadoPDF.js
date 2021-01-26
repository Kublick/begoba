import React from "react";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";

import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EnviadoPDF = () => {
	const data = useStaticQuery(
		graphql`
			query {
				desktop: file(relativePath: { eq: "fondoPDF.png" }) {
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
			<BackgroundImage fluid={imageData} className="bg-envio">
				<div className="flex h-full">
					<button className="px-16 py-8 m-auto text-2xl font-bold text-red-600 bg-white bg-opacity-75 rounded-lg">
						¡Gracias por registrarte!
					</button>
				</div>
			</BackgroundImage>
			<div className="grid grid-cols-2">
				<div>
					<p className="px-8 mt-8 text-lg font-bold text-center ">
						Te hemos enviado el enlace privado para acceder a la guía en formato
						PDF descargable, por correo electrónico.
					</p>
					<h1 className="mt-8 text-3xl font-bold text-center text-red-600">
						Se parte de la comunidad exitosos exclusivo para
					</h1>
				</div>
				<div className="py-4 bg-red-600 px-auto">
					<h1 className="py-4 text-3xl font-bold text-center text-white">
						Psicólogos
					</h1>

					<div className="flex justify-center py-4">
						<button className="px-8 py-4 text-xl font-bold text-red-600 transition duration-500 ease-in-out transform bg-white rounded-lg hover:bg-white hover:-translate-y-1 hover:scale-110">
							<FontAwesomeIcon icon={faFacebookSquare} className="mx-4" />
							Ir A La Comunidad
						</button>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-3xl text-center">¿Dónde está?</h1>
			</div>
		</>
	);
};

export default EnviadoPDF;
