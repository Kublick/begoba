import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
	fbmango,
	movie,
	notebook,
	wsmango,
	live,
} from '../components/helpers/logos';
import PropTypes from 'prop-types';

const Sociales = (props) => {
	const data = useStaticQuery(
		graphql`
			{
				mobile: file(relativePath: { eq: "Ft1 460x427px.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 100, width: 460, layout: CONSTRAINED)
					}
				}
				desktop: file(relativePath: { eq: "Ft1 964x460px-03.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 90, width: 964, layout: CONSTRAINED)
					}
				}
			}
		`,
	);

	return (
		<div className="p-5 mt-10 md:px-20 lg:p-20 bg-primary-light">
			<h1 className="mb-10 md:my-20 title">Que incluye</h1>
			<div className="grid gap-8 lg:grid-cols-2">
				<div className="flex flex-col">
					<div>
						<GatsbyImage
							image={data.desktop.childImageSharp.gatsbyImageData}
							className="rounded-lg shadow-2xl "
						/>
						<div className="flex justify-end">
							<button
								className="w-full mt-8 lg:w-64 btn-main"
								onClick={props.handleBackClick}
							>
								Registrate Ahora
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 px-5 md:gap-6">
					<div className="flex items-center gap-6">
						<span className="logo-fb">{fbmango} </span>
						<p className="text-sm font-semibold">
							Pertencer a la comunidad del grupo exclusivo en Facebook
						</p>
					</div>
					<div className="flex flex-row-reverse items-center gap-4">
						{movie}
						<p className="font-semibold">Transmisión en vivo</p>
					</div>

					<div className="flex items-center gap-4">
						<span className="logo-ws">{notebook} </span>

						<p className="font-semibold">Cuaderno de trabajo del taller</p>
					</div>
					<div className="flex flex-row-reverse items-center gap-4">
						<span className="logo-ws">{wsmango} </span>
						<p className="font-semibold">
							Serás parte de la comunidad dentro del grupo de Whatsapp para
							notificaciones
						</p>
					</div>
					<div className="flex items-center gap-4">
						<span className="logo-live">{live}</span>
						<p className="font-semibold">
							Participación en vivo en la clase especial número 5
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sociales;

Sociales.propTypes = {
	handleBackClick: PropTypes.func,
};
