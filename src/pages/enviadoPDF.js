import React from "react";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import {
	faFacebookSquare,
	faFacebookF,
	faYoutube,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import Img from "gatsby-image";
import gmailLogo from "../images/gmail.png";
// import chains from "../images/chains_t.png";
import people from "../images/people_t.png";
import { chainsIcon } from "../components/svg";

const EnviadoPDF = () => {
	const data = useStaticQuery(
		graphql`
			query {
				desktop: file(relativePath: { eq: "fondo_PDF.png" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1080) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				thumbs: file(relativePath: { eq: "thumbs.png" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1080) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				berenice: file(relativePath: { eq: "berenice.jpg" }) {
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
	const thumbData = data.thumbs.childImageSharp.fluid;
	const portrait = data.berenice.childImageSharp.fluid;

	// const videoUrl = "https://youtu.be/qjXPU9eExfA";

	if (typeof window !== "undefined") {
		if (window.fbq != null) {
			// window.fbq("track", "PageView");
			window.fbq("track", "CompleteRegistration");
		}
	}

	return (
		<>
			<BackgroundImage fluid={imageData} className="bg-envio">
				<div className="flex h-full">
					<button className="px-16 py-8 m-auto text-2xl font-bold text-red-600 bg-white bg-opacity-75 rounded-lg">
						¡Gracias por registrarte!
					</button>
				</div>
			</BackgroundImage>
			<div className="lg:grid lg:grid-cols-2">
				<div>
					<p className="px-8 mt-8 text-lg font-bold text-center ">
						Te hemos enviado a tu correo electrónico revísalo, ahí recibirás un
						email con todos los detalles.
					</p>
					<h1 className="mt-8 mb-8 text-3xl font-bold text-center text-red-600">
						Se parte de la comunidad exitosos exclusivo para
					</h1>
				</div>
				<div className="py-4 bg-red-600 px-auto">
					<h1 className="py-4 text-4xl font-bold text-center text-white">
						Profesionales de la salud
					</h1>

					<div className="flex justify-center py-4">
						<button
							className="px-8 py-4 text-xl font-bold text-blue-600 transition duration-500 ease-in-out transform bg-white rounded-lg hover:bg-white hover:-translate-y-1 hover:scale-110"
							onClick={() =>
								window.open(
									"http://www.facebook.com/groups/2375070212786505/",
									"_blank"
								)
							}
						>
							<FontAwesomeIcon icon={faFacebookSquare} className="mx-4" />
							Ir A La Comunidad
						</button>
					</div>
				</div>
			</div>
			<div className="pb-8 bg-gray-200">
				<h1 className="py-4 text-3xl text-center">¿Dónde está?</h1>
				<div className="lg:mx-64">
					<div className="grid mx-auto lg:grid lg:grid-cols-3">
						<div className="flex flex-col items-center justify-center mx-auto">
							{/* <img src={chains} alt="pdflogo" style={{ width: "120px" }} /> */}
							{chainsIcon}
							<p className="w-64">
								Enlace personal busca en tu bandeja de correo electrónico el
								asunto: <strong>“¡Ya está apartado tu lugar!...</strong>” abre
								el correo.
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
								Saca el mayor provecho a este evento te extendemos la invitación
								para que te unas a la comunidad exitosos en facebook exclusiva
								para profesionales de la salud
							</p>
						</div>
					</div>
				</div>
			</div>
			<BackgroundImage fluid={thumbData}>
				<div className="lg:grid lg:grid-cols-2">
					<div className="flex justify-center my-auto">
						<h1 className="mx-8 my-4 text-3xl font-bold text-center text-red-600 ">
							¿Eres profesional de la salud y te gustaría tener mas pacientes?
						</h1>
					</div>
					<div className="flex justify-center py-10 ">
						<div className="flex flex-col px-4 py-6 text-red-600 bg-white rounded-lg">
							<p>
								<span>
									<FontAwesomeIcon icon={faCheckCircle} className="mx-2" />
								</span>
								Unete a la Comunidad Exitosos
							</p>
							<p>
								<span>
									<FontAwesomeIcon icon={faCheckCircle} className="mx-2" />
								</span>
								Es un espacio creado para ti
							</p>
							<p>
								<span>
									<FontAwesomeIcon icon={faCheckCircle} className="mx-2" />
								</span>
								Dónde puedes compartir con Profesionales de la salud
							</p>
							<p>
								<span>
									<FontAwesomeIcon icon={faCheckCircle} className="mx-2" />
								</span>
								Has clic en el botón
							</p>
						</div>
					</div>
				</div>
			</BackgroundImage>

			<div className="py-4 bg-red-600 lg:grid lg:grid-cols-2">
				<div>
					<h1 className="px-2 mt-8 mb-8 text-3xl font-bold text-center text-white">
						<h1>Quiero pertenecer a la exclusiva Comunidad Exitosos</h1>
					</h1>
				</div>
				<div className="my-auto bg-red-600">
					<div className="flex justify-center py-4">
						<button
							className="px-8 py-4 text-xl font-bold text-blue-600 transition duration-500 ease-in-out transform bg-white rounded-lg hover:bg-white hover:-translate-y-1 hover:scale-110"
							onClick={() =>
								window.open(
									"http://www.facebook.com/groups/2375070212786505/",
									"_blank"
								)
							}
						>
							<FontAwesomeIcon icon={faFacebookSquare} className="mx-4" />
							Ir A La Comunidad
						</button>
					</div>
				</div>
			</div>
			<div>
				<div className="grid grid-cols-2">
					<div className="py-12">
						<Img fluid={portrait} className="mx-auto rounded-full portrait" />
					</div>
					<div>
						<div className="py-12 text-red-600">
							<FontAwesomeIcon icon={faStar} className="mx-2" />
							<FontAwesomeIcon icon={faStar} className="mx-2" />
							<FontAwesomeIcon icon={faStar} className="mx-2" />
							<FontAwesomeIcon icon={faStar} className="mx-2" />
							<FontAwesomeIcon icon={faStar} className="mx-2" />
							<p className="py-2 ml-2 text-sm text-black">Anfitrión</p>
							<p className="ml-2 text-lg text-black">
								Psicóloga Berenice Bastidas
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-lg text-center">Siguenos en redes sociales</h1>
				<div className="flex flex-row justify-center py-8">
					<button
						className="mx-4 text-red-600 bg-red-200 rounded-full outline-none shape hover:bg-red-600 hover:text-white focus:outline-none"
						onClick={() =>
							window.open(
								"https://www.facebook.com/Psic%C3%B3loga-Berenice-Bastidas-365202393876165",
								"_blank"
							)
						}
					>
						<FontAwesomeIcon
							icon={faFacebookF}
							className="mx-2 text-lg outline-none "
						/>
					</button>
					<button
						className="mx-4 text-red-600 bg-red-200 rounded-full shape hover:bg-red-600 hover:text-white focus:outline-none"
						onClick={() =>
							window.open(
								"https://www.youtube.com/channel/UCoiQ74yUzLm6ZRUcB_rhPIQ/videos",
								"_blank"
							)
						}
					>
						<FontAwesomeIcon icon={faYoutube} className="mx-2 text-lg " />
					</button>
					<button
						className="mx-4 text-red-600 bg-red-200 rounded-full shape hover:bg-red-600 hover:text-white focus:outline-none"
						onClick={() =>
							window.open(
								"http://www.instagram.com/berenicebastidas/?hl=es-la",
								"_blank"
							)
						}
					>
						<FontAwesomeIcon icon={faInstagram} className="text-lg " />
					</button>
				</div>
			</div>
		</>
	);
};

export default EnviadoPDF;
