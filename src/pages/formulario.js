import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const formulario = () => {
	const data = useStaticQuery(
		graphql`
			query {
				mobile: file(relativePath: { eq: "mobileFormulario.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 720) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				desktop: file(relativePath: { eq: "formulario.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 720) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		`
	);

	const sources = [
		data.mobile.childImageSharp.fixed,
		{
			...data.desktop.childImageSharp.fixed,
			media: `(min-width: 768px)`,
		},
	];

	//	const imageData = data.desktop.childImageSharp.fixed;
	return (
		<>
			<div className="flex flex-col justify-center h-screen align-middle bg-gray-100">
				<Img
					fixed={sources}
					objectFit="cover"
					className="mx-auto sm:bg__encuesta"
				/>
				<button
					className="p-4 m-8 mx-auto mt-12 text-white bg-green-600 outline-none sm:text-xl lg:text-3xl lg:w-1/3 rounded-2xl animate-bounce"
					onClick={() => window.open("https://es.surveymonkey.com/r/3V88KV5")}
				>
					Llena tu formulario de aplicación
				</button>
			</div>
		</>
	);
};

export default formulario;
