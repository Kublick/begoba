import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Anfrition = () => {
	const data = useStaticQuery(
		graphql`
			{
				mobile: file(relativePath: { eq: "FtBerenice 460x778px.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 100, width: 460, layout: CONSTRAINED)
					}
				}
				desktop: file(relativePath: { eq: "FtBerenice 720x1217px.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 90, width: 964, layout: CONSTRAINED)
					}
				}
			}
		`,
	);

	console.log(data);
	return (
		<div className="px-10 pt-20">
			<h1 className="title">Anfitrión del taller</h1>
			<div className="grid lg:grid-cols-2">
				<div className="flex flex-col justify-center md:mx-24">
					<h2 className="py-2 text-3xl font-bold text-center md:py-4 md:text-4xl text-secondary">
						Berenice Bastidas
					</h2>
					<p className="text-lg text-center md:w-3/4 md:text-left">
						Psicóloga de profesión desde hace 15 años y en los últimos años me
						he dedicado ayudar a Psicólogos, Nutriologos y profesionales de la
						salud a que multipliquen sus ingresos incrementando su número de
						pacientes con estrategia a través de internet incluso empezando
						desde cero.
					</p>
				</div>

				<div className="flex justify-center order-first my-4 md:order-last">
					<GatsbyImage
						image={data.mobile.childImageSharp.gatsbyImageData}
						className="w-1/2"
					/>
				</div>
			</div>
		</div>
	);
};

export default Anfrition;
