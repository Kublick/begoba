import React from 'react';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Sesiones from '../components/Sesiones';
import Sociales from '../components/Sociales';
import Anfrition from '../components/Anfrition';
// import Countdown from "react-countdown";

function IndexPage() {
	// if (typeof window !== 'undefined') {
	// 	if (window.fbq != null) {
	// 		// window.fbq("track", "PageView");
	// 		window.fbq('track', 'ViewContent');
	// 	}
	// }

	return (
		<>
			<SEO
				keywords={[
					`psicologo`,
					`curso`,
					`pacientes`,
					`formacion`,
					`nutriologos`,
					`medicos`,
					`fisioterapeutas`,
				]}
				title="Incrementa tu numero de pacientes"
			/>

			<section>
				<Hero />
			</section>
			<div>
				<section>
					<Sesiones />
				</section>
			</div>

			<section>
				<Sociales />
			</section>

			<section>
				<Anfrition />
			</section>
		</>
	);
}

export default IndexPage;
