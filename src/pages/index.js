import React from "react";
import SEO from "../components/seo";
import Hero from "../components/hero";
import pdfLogo from "../images/pdf.png";
import gmailLogo from "../images/gmail.png";
import Countdown from "react-countdown";
// import CookieConsent from "react-cookie-consent";

function IndexPage() {
	// if (typeof window !== "undefined") {
	// 	if (window.fbq != null) {
	// 		window.fbq("track", "PageView");
	// 		window.fbq("track", "ViewContent");
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
			<Hero />
			<h1 className="mt-4 mb-8 text-2xl text-center">
				Oferta disponible por tiempo limitado:
			</h1>
			<div className="mb-8 text-2xl text-center text-red-600">
				<Countdown
					date={Date.now() + Math.floor(Math.random() * 1000000 + 4000000)}
				/>
			</div>
			<h1 className="text-3xl text-center text-red-600 bg-white pb-36 lg:py-24">
				¡Registro Gratis!
			</h1>
			<div className="py-32 download">
				<h1 className="w-1/2 mx-auto text-4xl text-center">
					Encontrarás los pasos para tener más pacientes en tu consulta a través
					de internet.
				</h1>
				<div className="mt-24 lg:mx-64">
					<div className="grid mx-auto lg:grid lg:grid-cols-2">
						<div className="flex flex-col items-center justify-center mx-auto">
							<img src={pdfLogo} alt="pdflogo" style={{ width: "120px" }} />
							<p className="py-8 w-38">Guía gratis descargable</p>
						</div>
						<div className="flex flex-col items-center justify-center mx-auto">
							<img src={gmailLogo} alt="pdflogo" style={{ width: "120px" }} />
							<p className="w-36">
								La enviaremos a tu correo una vez que te hayas registrado
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="py-12 bg-gradient-to-b from-black to-gray-600">
				<h1 className="px-4 mb-8 text-3xl font-bold text-center text-red-600">
					¿Te gustaría incrementar tu número de pacientes, si tu profesión es
					alguna de las siguientes?
				</h1>
				<div>
					<ul className="text-xl text-center text-white">
						<li>Psícologo</li>
						<li>Nutriólogo</li>
						<li>Fisioterapeuta</li>
						<li>Profesional de la salud</li>
					</ul>
				</div>
			</div>
			<div className="bg-red-500">
				<h1 className="px-4 py-8 text-2xl font-bold text-center text-white">
					¡Tú puedes incrementar tu número de pacientes con estrategia a través
					de internet incluso empezando desde cero!
				</h1>
			</div>
			{/* <CookieConsent
				enableDeclineButton
				location="bottom"
				buttonText="OK"
				declineButtonText="Politica de Privacidad"
				cookieName="begobapp"
				style={{ background: "#2B373B" }}
				buttonStyle={{ color: "#ffff", fontSize: "13px" }}
				expires={150}
				onDecline={() =>
					window.open("http://www.begoba.com/registro/privacy-policy", "_blank")
				}
			>
				Utilizamos cookies para asegurar que damos la mejor experiencia al
				usuario en nuestra web. Si sigues utilizando este sitio asumiremos que
				estás de acuerdo.
			</CookieConsent> */}
		</>
	);
}

export default IndexPage;
