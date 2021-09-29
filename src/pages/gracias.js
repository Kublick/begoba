import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
	fbsecondary,
	ytwhite,
	inswhite,
	mainLogo,
} from '../components/helpers/logos';

const Gracias = () => {
	const data = useStaticQuery(
		graphql`
			{
				desktop: file(relativePath: { eq: "Berenice_profile.jpeg" }) {
					childImageSharp {
						gatsbyImageData(quality: 90, width: 320, layout: CONSTRAINED)
					}
				}
			}
		`,
	);

	// if (typeof window !== 'undefined') {
	// 	if (window.fbq != null) {
	// 		window.fbq('track', 'CompleteRegistration');
	// 	}
	// }

	return (
		<div>
			<div className="flex justify-center transform scale-75">{mainLogo}</div>
			<div className="p-8 bg-primary-light lg:px-20">
				<h1 className="text-2xl text-center lg:text-4xl">
					Gracias por Registrarte en la lista de espera
				</h1>
				<div className="grid my-6 md:grid-cols-2">
					<div className="box">
						<div className="flex justify-center">
							<GatsbyImage
								image={data.desktop.childImageSharp.gatsbyImageData}
								className="m-4 transform scale-75 circle"
								alt="Imagen Berenice"
							/>
						</div>
					</div>
					<div className="flex flex-col justify-center gap-6">
						<h1 className="text-xl text-center lg:text-2xl">
							Sigueme en mis redes sociales
						</h1>
						<div className="flex justify-center gap-12 mb-2 md:mb-0">
							<button
								className="white-btn"
								onClick={() =>
									window.open(
										'http://www.facebook.com/groups/2375070212786505/',
									)
								}
							>
								{fbsecondary}
							</button>
							<button
								className="white-btn"
								onClick={() =>
									window.open(
										'https://www.youtube.com/channel/UCoiQ74yUzLm6ZRUcB_rhPIQ',
									)
								}
							>
								{ytwhite}
							</button>
							<button
								className="white-btn"
								onClick={() =>
									window.open('https://www.instagram.com/psicologaberenice/')
								}
							>
								{inswhite}
							</button>
						</div>
					</div>
				</div>
				<p className="text-2xl text-center text-secondary font-cursive">
					Gracias por Registrarte
				</p>
			</div>
		</div>
	);
};

export default Gracias;
