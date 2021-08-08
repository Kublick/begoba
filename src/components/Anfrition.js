import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Anfrition = () => {
	const data = useStaticQuery(
		graphql`
			query {
				mobile: file(relativePath: { eq: "FtBerenice 460x778px.png" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 460) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				desktop: file(relativePath: { eq: "FtBerenice 720x1217px.png" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 964) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`,
	);

	console.log(data);
	return (
		<div className="px-10 pt-20">
			<h1 className="title">Anfitrión del taller</h1>
			<div className="grid md:grid-cols-2">
				<div className="flex flex-col justify-center mx-24">
					<h2 className="py-4 text-4xl font-bold text-secondary">
						Berenice Bastidas
					</h2>
					<p className="w-3/4 text-lg">
						Psicóloga de profesión desde hace 15 años y en los últimos años me
						he dedicado ayudar a Psicólogos, Nutriologos y profesionales de la
						salud a que multipliquen sus ingresos incrementando su número de
						pacientes con estrategia a través de internet incluso empezando
						desde cero.
					</p>
				</div>

				<div className="flex justify-center">
					<Image fluid={data.mobile.childImageSharp.fluid} className="w-1/2" />
				</div>
			</div>
		</div>
	);
};

export default Anfrition;
