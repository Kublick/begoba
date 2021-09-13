import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import FormularioS3 from '../components/FormularioS3';

const Registroformulario = () => {
	if (typeof window !== 'undefined') {
		if (window.fbq != null) {
			// window.fbq("track", "PageView");
			window.fbq('track', 'Lead');
		}
	}
	return (
		<div>
			<div className={`flex justify-center bg-secondary`}>
				<div className="flex justify-center">
					<div className="w-48 px-6 pb-6 bg-white rounded-b-lg shadow-xl lg:w-64 h-3/4">
						<div className="">
							<StaticImage
								src="../images/Incremnta_lateral.png"
								className="mt-4"
								alt="Logo incrementa tu consulta"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-6 bg-gray-50">
				<h1 className="mt-6 text-2xl">Llena el formulario aqui:</h1>
				{/* <button
					className="px-8 py-4 font-bold text-white bg-primary rounded-xl"
					onClick={() => window.open('https://es.surveymonkey.com/r/9DYKLVB')}
				>
					Quiero Llenar el Formulario
				</button> */}
				<div className="mb-10">
					<FormularioS3 />
				</div>
			</div>
		</div>
	);
};

export default Registroformulario;
