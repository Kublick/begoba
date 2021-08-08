import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import {
	whitelogo,
	fbwhite,
	ytwhite,
	inswhite,
} from '../components/helpers/logos';

const Footer = () => {
	const data = useStaticQuery(
		graphql`
			query {
				mobile: file(relativePath: { eq: "Ft2 460x427px.png" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 460) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				desktop: file(relativePath: { eq: "Ft1 964x460px.png" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 964) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`,
	);

	return (
		<>
			<div className="px-20 pt-20 bwhitelogog-primary-light">
				<h1 className="title">Este entrenamiento es para ti, si eres:</h1>
				<div className="grid grid-cols-2 my-10">
					<div className="grid items-center w-3/4 grid-cols-2 gap-4">
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
						<Image
							fluid={data.desktop.childImageSharp.fluid}
							className="w-3/4 rounded-lg shadow-2xl"
						/>
					</div>
				</div>
				<div className="flex justify-center pb-8">
					<button className="px-4 py-1 text-white border-4 bg-primary border-mango rounded-xl hover:bg-primary-dark hover:border-primary-dark">
						Registate Ahora
					</button>
				</div>
				<div></div>
			</div>
			<div className="border-t-8 border-b-8 border-t-mango border-b-primary" />
			<div className="px-20 pt-4 bg-secondary">
				<div className="flex justify-between">
					{whitelogo}
					<p className="w-1/2 text-center text-white footer-text">
						Legal Terms - Acerca de las politicas de privacidad y uso de cookies
						Incrementa tu consulta Derechos reservados 2021
						https://incrementatuconsulta.com Psicologa Berenice Bastidas
						Mexicali Baja California, México <br /> Whatsapp: + 52 (686)
						234-9366
					</p>
					<div className="flex gap-4">
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
