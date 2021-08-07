import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import {
	fbmango,
	movie,
	notebook,
	wsmango,
	live,
} from '../components/helpers/logos';

const Sociales = () => {
	const data = useStaticQuery(
		graphql`
			query {
				mobile: file(relativePath: { eq: "Ft1 460x427px.png" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 460) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				desktop: file(relativePath: { eq: "Ft1 964x460px-03.png" }) {
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
		<div className="px-20 py-20 mt-10 bg-primary-light">
			<h1 className="mb-20 title">Que incluye</h1>
			<div className="grid gap-8 md:grid-cols-2">
				<div className="flex flex-col">
					<div>
						<Image
							fluid={data.desktop.childImageSharp.fluid}
							className="rounded-lg shadow-2xl "
						/>
						<div className="flex justify-end">
							<button className="w-64 mt-8 btn-main">Registrate Ahora</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6 px-10">
					<div className="flex items-center gap-4">
						{fbmango}
						<p className="font-semibold">
							Pertencer a la comunidad del grupo exclusivo en Facebook
						</p>
					</div>
					<div className="flex flex-row-reverse items-center gap-4">
						{movie}
						<p className="font-semibold">Transmisión en vivo</p>
					</div>

					<div className="flex items-center gap-4">
						{notebook}
						<p className="font-semibold">Cuaderno de trabajo del taller</p>
					</div>
					<div className="flex flex-row-reverse items-center gap-4">
						{wsmango}
						<p className="font-semibold">
							Serás parte de la comunidad dentro del grupo de Whatsapp para
							notificaciones
						</p>
					</div>
					<div className="flex items-center gap-4">
						{live}
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
