import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFormularios } from '../graphql/queries';

const Formviews = () => {
	const [tableValues, setTableValues] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await API.graphql(graphqlOperation(listFormularios));
			setTableValues(res.data.listFormularios.items);
		};
		getData();
	}, []);

	return (
		<div>
			<h1>Resultado de la Encuesta</h1>
			{tableValues.map((t) => (
				<div
					key={t.id}
					className="flex flex-col w-1/2 gap-2 p-8 m-4 bg-gray-100 rounded-lg"
				>
					<p>Registrado el: {new Date(t.updatedAt).toLocaleString()} </p>
					<p className="form-label">1. ¿Cual es tu nombre completo?</p>
					<p>{t.nombre}</p>
					<p className="form-label">2. ¿Cual es el país donde vives?</p>
					<p>{t.pais}</p>
					<p htmlFor="email" className="form-label">
						3. ¿Cual es tu correo electrónico?
					</p>
					<p>{t.email}</p>
					<p className="form-label">
						4. ¿Cual es tu WhatsApp con el código de área de tu país?
					</p>
					<p> {t.whatsapp} </p>

					<p className="form-label">
						5. ¿Cual es tu meta que te gustaría lograr como profesional y que
						significaría para ti poder lograrla?
					</p>
					<p> {t.pregunta1} </p>
					<label className="form-label">
						6. ¿Qué problema quieres resolver y que has hecho para solucionarlo?
					</label>
					<p> {t.pregunta2} </p>
					<p className="form-label">
						7. ¿Por qué estas interesado (a) en adquirir el entrenamiento
						incrementa tu consulta?
					</p>

					<p> {t.pregunta3} </p>
					<p className="form-label">
						8. ¿Estás consciente que para obtener pacientes a través de internet
						requieres hacer una inversión de dinero?
					</p>
					<p> {t.preguntaradio} </p>

					<p className="form-label">
						9. ¿Hay muchas personas que quieren este entrenamiento; ¿por qué
						debo elegirte a ti en lugar de a ellos?
					</p>
					<p>{t.pregunta4} </p>

					<p className="form-label">
						10. ¿Estás consciente que el entrenamiento tiene un valor, un costo;
						¿tienes el dinero para hacer esta inversión?
					</p>

					<p> {t.pregunta5} </p>

					<p htmlFor="contacto" className="form-label">
						11. ¿Nos permites contactarte vía WhatsApp?
					</p>

					<p>{t.contacto}</p>
				</div>
			))}
		</div>
	);
};

export default Formviews;
