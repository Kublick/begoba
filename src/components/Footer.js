import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
	whitelogo,
	fbwhite,
	ytwhite,
	inswhite,
} from '../components/helpers/logos';

const Footer = () => {
	const data = useStaticQuery(
		graphql`
			{
				mobile: file(relativePath: { eq: "Ft2 460x427px.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 100, width: 460, layout: CONSTRAINED)
					}
				}
				desktop: file(relativePath: { eq: "Ft1 964x460px.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 90, width: 964, layout: CONSTRAINED)
					}
				}
			}
		`,
	);

	return (
		<>
			<div className="px-5 pt-10 md:px-20 md:pt-20 bg-primary-light">
				<h1 className="title">Este entrenamiento es para ti, si eres:</h1>
				<div className="grid my-10 md:grid-cols-2">
					<div className="grid items-center grid-cols-2 gap-4 mb-4 md:w-3/4">
						<p className="footer-btn-secondary justify-self-end">Psicologo</p>
						<p className="footer-btn-primary">Nutriologo</p>
						<p className="footer-btn-primary justify-self-end">Cosmetóloga</p>
						<p className="footer-btn-secondary">Terapeuta</p>
						<p className="text-center footer-btn-secondary justify-self-end">
							Profesional de
							<br /> la Salud
						</p>
						<p className="footer-btn-primary">Coach</p>
					</div>
					<div>
						<GatsbyImage
							image={data.desktop.childImageSharp.gatsbyImageData}
							className="rounded-lg shadow-2xl md:w-3/4"
						/>
					</div>
				</div>
				<div className="flex justify-center pb-8">
					<button className="w-full py-1 text-white border-2 lg:w-64 md:px-4 bg-primary border-mango rounded-xl hover:bg-primary-dark hover:border-primary-dark">
						Registate Ahora
					</button>
				</div>
				<div></div>
			</div>
			<div className="border-t-8 border-b-8 border-t-mango border-b-primary" />
			<div className="px-5 pt-4 pb-12 md:px-20 bg-secondary">
				<div className="grid gap-4 lg:grid-cols-4 justify-items-center">
					{whitelogo}
					<p className="w-1/2 col-span-2 text-center text-white footer-text place-selft-center">
						Legal Terms - Acerca de las politicas de privacidad y uso de cookies
						Incrementa tu consulta Derechos reservados 2021
						https://incrementatuconsulta.com Psicologa Berenice Bastidas
						Mexicali Baja California, México <br /> Whatsapp: + 52 (686)
						234-9366
					</p>
					<div className="flex gap-4 mb-2 md:mb-0">
						<button className="white-btn">{fbwhite}</button>
						<button className="white-btn">{ytwhite}</button>
						<button className="white-btn">{inswhite}</button>
					</div>
				</div>
				<p className="text-mini">
					Este sitio no forma parte del sitio de Facebook o Facebook Inc.
					Además, este sitio NO está respaldado por Facebook de ninguna manera.
					FACEBOOK es una marca registrada de FACEBOOK, Inc. Cuando se registre
					para este taller gratuito, ocasionalmente recibirá correos
					electrónicos gratuitos, consejos útiles, videos y actualizaciones para
					hacer crecer tu lista de pacientes y temas relacionados. Estamos
					compartiendo lo que hemos aprendido de nuestras experiencias y la de
					nuestros estudiantes del entrenamiento incrementa tu consulta y esta
					información no es garantía de ganancias o resultados. Si desea dejar
					de recibir nuestros correos electrónicos, puede darse de baja en
					cualquier momento que así lo desee, utilizando el enlace para des
					suscribirse que aparecerá en los correos electrónicos.
				</p>
			</div>
		</>
	);
};

export default Footer;
