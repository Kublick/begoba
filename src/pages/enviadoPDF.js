import React from "react";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gmailLogo from "../images/gmail.png";
import chains from "../images/chains_t.png";
import people from "../images/people_t.png";

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
					<h1 className="py-4 text-4xl font-bold text-center text-white">
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
			<div className="pb-8 bg-gray-200">
				<h1 className="py-4 mt-4 text-3xl text-center">¿Dónde está?</h1>
				<div className="lg:mx-64">
					<div className="grid mx-auto lg:grid lg:grid-cols-3">
						<div className="flex flex-col items-center justify-center mx-auto">
							<img src={chains} alt="pdflogo" style={{ width: "120px" }} />
							<p className="w-64">
								Enlace personal Busca en tu bandeja de correo electrónico el
								asunto: “Felicidades ya puedes descargar tu regalo...” abre el
								correo.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center mx-auto">
							<img src={gmailLogo} alt="pdflogo" style={{ width: "120px" }} />
							<p className="w-64">
								¿Eres usuario de Gmail? Nuestros correos usualmente aterrizan en
								la pestaña de promocione o spam.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center mx-auto">
							<img src={people} alt="pdflogo" style={{ width: "120px" }} />
							<p className="w-64">
								Saca el mayor provecho a esta Guia te extendemos la invitación
								para que te unas a la comunidad exitosos en Facebook es
								exclusiva para psicólogos.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2">
				<div>
					<h1>¿Eres Psicólogo y te gustaría tener mas pacientes?</h1>
				</div>
				<div className="text-red-600 bg-white">
					<p>Unete a la Comunidad Exitosos</p>
					<p>Es un espacio creado para ti</p>
					<p>Dónde puedes compartir con Psicólogos</p>
					<p>Has clic en el botón</p>
				</div>
			</div>
			<div className="bg-red-600">
				<h1>Quiero pertenecer a la exlusiva Comunidad Exitosos</h1>
			</div>
		</>
	);
};

export default EnviadoPDF;
