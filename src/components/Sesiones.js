import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Sesiones = () => {
	const data = useStaticQuery(
		graphql`
			{
				redes: file(relativePath: { eq: "RedesSoc.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 90, width: 111, height: 111, layout: FIXED)
					}
				}
				incrementar: file(relativePath: { eq: "incrementar.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 90, width: 111, height: 111, layout: FIXED)
					}
				}
				vender: file(relativePath: { eq: "vender.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 90, width: 111, height: 111, layout: FIXED)
					}
				}
				miedos: file(relativePath: { eq: "miedos.png" }) {
					childImageSharp {
						gatsbyImageData(quality: 90, width: 111, height: 111, layout: FIXED)
					}
				}
			}
		`,
	);

	return (
		<div className="mx-10">
			<h1 className="mt-12 text-3xl font-bold text-center md:text-4xl text-primary">
				Que vas a descubrir en este taller:
			</h1>
			<div className="grid gap-4 mt-12 md:grid-cols-2 ">
				<div>
					<div className="flex gap-4">
						<p className="sesiones-circle">1</p>
						<GatsbyImage
							image={data.redes.childImageSharp.gatsbyImageData}
							alt="icono redes sociales"
						/>
					</div>
					<p className="sesiones-text">
						Tu oportunidad de tener pacientes desde las redes sociales
					</p>
				</div>
				<div>
					<div className="flex gap-4">
						<p className="sesiones-circle">2</p>
						<GatsbyImage
							image={data.incrementar.childImageSharp.gatsbyImageData}
							alt="icono incrementa ventas"
						/>
					</div>
					<p className="sesiones-text">
						Las top 7 formas de tener dinero online y los 5 errores de novato
					</p>
				</div>
				<div>
					<div>
						<div className="flex gap-4">
							<p className="sesiones-circle">3</p>
							<GatsbyImage
								image={data.vender.childImageSharp.gatsbyImageData}
								alt="icono incrementar ventas"
							/>
						</div>
					</div>
					<p className="sesiones-text">
						Como vender tu consulta online con la estrategia DEPE
					</p>
				</div>
				<div>
					<div className="flex gap-4">
						<p className="sesiones-circle">4</p>
						<GatsbyImage
							image={data.miedos.childImageSharp.gatsbyImageData}
							alt="icono vence tus miedos"
						/>
					</div>
					<p className="sesiones-text">
						Derriba tus miedos y da ese siguiente paso para vivir de tu consulta
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sesiones;
