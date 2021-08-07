import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Sesiones = () => {
	const data = useStaticQuery(
		graphql`
			query {
				redes: file(relativePath: { eq: "RedesSoc.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 111, height: 111) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				incrementar: file(relativePath: { eq: "incrementar.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 111, height: 111) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				vender: file(relativePath: { eq: "vender.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 111, height: 111) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
				miedos: file(relativePath: { eq: "miedos.png" }) {
					childImageSharp {
						fixed(quality: 90, width: 111, height: 111) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		`,
	);

	return (
		<div className="container mx-10">
			<h1 className="mt-12 text-4xl font-bold text-center text-primary">
				Que vas a descubrir en este taller:
			</h1>
			<div className="grid gap-4 mt-12 md:grid-cols-2 ">
				<div>
					<div className="flex gap-4">
						<p className="sesiones-circle">1</p>
						<Image fixed={data.redes.childImageSharp.fixed} />
					</div>
					<p className="sesiones-text">
						Tu oportunidad de tener pacientes desde las redes sociales
					</p>
				</div>
				<div>
					<div className="flex gap-4">
						<p className="sesiones-circle">2</p>
						<Image fixed={data.incrementar.childImageSharp.fixed} />
					</div>
					<p className="sesiones-text">
						Las top 7 formas de tener dinero online y los 5 errores de novato
					</p>
				</div>
				<div>
					<div>
						<div className="flex gap-4">
							<p className="sesiones-circle">3</p>
							<Image fixed={data.vender.childImageSharp.fixed} />
						</div>
					</div>
					<p className="sesiones-text">
						Como vender tu consulta online con la estrategia D.E.P.E
					</p>
				</div>
				<div>
					<div className="flex gap-4">
						<p className="sesiones-circle">4</p>
						<Image fixed={data.miedos.childImageSharp.fixed} />
					</div>
					<p className="sesiones-text">
						Derriba tus miedos y de ese siguiente paso para vivir de tu consulta
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sesiones;
