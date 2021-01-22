import React from "react";
import SEO from "../components/seo";
import Hero from "../components/hero";

function IndexPage() {
	return (
		<div>
			<SEO
				keywords={[`psicologo`, `curso`, `pacientes`, `formacion`]}
				title="Incrementa tu numero de pacientes"
			/>
			<Hero />
		</div>
	);
}

export default IndexPage;
