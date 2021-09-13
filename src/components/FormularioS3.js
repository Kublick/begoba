import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { API, graphqlOperation } from 'aws-amplify';
import { createFormulario } from '../graphql/mutations';
import { navigate } from 'gatsby';

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
	nombre: yup.string().required('El nombre es un campo requerido'),
	pais: yup.string().required('El pais es un campo requerido'),
	email: yup
		.string()
		.email('Debe ser un email valido')
		.required('El correo electronico es un campo requerido'),
	whatsapp: yup
		.string()
		.required('El numero es un campo requerido ')
		.matches(phoneRegExp, 'El numero no es valido')
		.min(12, 'falta un digito')
		.max(12, 'sobra un digito'),
	pregunta1: yup.string().required('Campo requerido'),
	pregunta2: yup.string().required('Campo requerido'),
	pregunta3: yup.string().required('Campo requerido'),
	pregunta4: yup.string().required('Campo requerido'),
	pregunta5: yup.string().required('Seleccione una opcion').nullable(),
	contacto: yup.string().required('Seleccione una opcion').nullable(),
	preguntaradio: yup.string().required('Seleccione una opcion').nullable(),
});

const FormularioS3 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		await API.graphql(graphqlOperation(createFormulario, { input: data }));
		navigate('/formfilled');
	};

	return (
		<div className="mx-4">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-2">
					<label htmlFor="nombre" className="form-label">
						1. ¿Cual es tu nombre completo?
					</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						{...register('nombre')}
						className="form-input"
					/>
					<p className="form-error">{errors.nombre?.message}</p>
					<label htmlFor="pais" className="form-label">
						2. ¿Cual es el país donde vives?
					</label>
					<input
						type="text"
						name="pais"
						id="pais"
						{...register('pais')}
						className="form-input"
					/>
					<p className="form-error">{errors.pais?.message}</p>
					<label htmlFor="email" className="form-label">
						3. ¿Cual es tu correo electrónico?
					</label>
					<input
						type="email"
						name="email"
						id="email"
						{...register('email')}
						className="form-input"
					/>
					<p className="form-error">{errors.email?.message}</p>
					<label htmlFor="whatsapp" className="form-label">
						4. ¿Cual es tu WhatsApp con el código de área de tu país?
					</label>
					<input
						type="text"
						name="whatsapp"
						id="whatsapp"
						{...register('whatsapp')}
						className="form-input"
					/>
					<p className="form-error">{errors.whatsapp?.message}</p>

					<label htmlFor="pregunta1" className="form-label">
						5. ¿Cual es tu meta que te gustaría lograr como profesional y que
						significaría para ti poder lograrla?
					</label>
					<input
						type="text"
						name="pregunta1"
						id="pregunta1"
						{...register('pregunta1')}
						className="form-input"
					/>
					<p className="form-error">{errors.pregunta1?.message}</p>

					<label htmlFor="pregunta2" className="form-label">
						6. ¿Qué problema quieres resolver y que has hecho para solucionarlo?
					</label>
					<input
						type="pregunta2"
						name="pregunta2"
						id="pregunta2"
						{...register('pregunta2')}
						className="form-input"
					/>
					<p className="form-error">{errors.pregunta2?.message}</p>

					<label htmlFor="pregunta3" className="form-label">
						7. ¿Por qué estas interesado (a) en adquirir el entrenamiento
						incrementa tu consulta?
					</label>
					<input
						type="text"
						name="pregunta3"
						id="pregunta3"
						{...register('pregunta3')}
						className="form-input"
					/>
					<p className="form-error">{errors.pregunta3?.message}</p>

					<label htmlFor="pregunta4" className="form-label">
						8. ¿Estás consciente que para obtener pacientes a través de internet
						requieres hacer una inversión de dinero?
					</label>

					<div className="flex items-center">
						<input
							type="radio"
							name="pregunta3"
							id="preguntaradio"
							{...register('preguntaradio')}
							className="form-input"
							value="Si"
						/>
						<span className="form-input">
							¡Si! Soy consciente que necesito invertir
						</span>
					</div>
					<div className="flex items-center">
						<input
							type="radio"
							name="preguntaradio"
							id="preguntaradio"
							{...register('preguntaradio')}
							className="form-input"
							value="No"
						/>
						<span className="form-input">
							No quiero invertir dinero en este momento
						</span>
					</div>
					<p className="form-error">{errors.preguntaradio?.message}</p>
					<label htmlFor="pregunta4" className="form-label">
						9. ¿Hay muchas personas que quieren este entrenamiento; ¿por qué
						debo elegirte a ti en lugar de a ellos?
					</label>
					<input
						type="pregunta4"
						name="pregunta4"
						id="pregunta4"
						{...register('pregunta4')}
						className="form-input"
					/>
					<p className="form-error">{errors.pregunta4?.message}</p>

					<label htmlFor="pregunta4" className="form-label">
						10. ¿Estás consciente que el entrenamiento tiene un valor, un costo;
						¿tienes el dinero para hacer esta inversión?
					</label>

					<div className="flex items-center">
						<input
							type="radio"
							name="pregunta5"
							id="pregunta5"
							{...register('pregunta5')}
							className="form-input"
							value="Si"
						/>
						<span className="form-input">
							!Si! cuento con los recursos para iniciar inmediatamente
						</span>
					</div>

					<div className="flex items-center">
						<input
							type="radio"
							name="pregunta5"
							id="pregunta5"
							{...register('pregunta5')}
							className="form-input"
							value="No"
						/>
						<span className="form-input">
							¡No! cuento con los recursos financieros para invertir ahora, y no
							tengo opción de conseguirlos
						</span>
					</div>

					<div className="flex items-center">
						<input
							type="radio"
							name="pregunta5"
							id="pregunta5"
							{...register('pregunta5')}
							className="form-input"
							value="Puedo conseguirlo"
						/>
						<span className="form-input">
							Puedo conseguir los recursos que se necesitan para iniciar mi
							entrenamiento
						</span>
					</div>

					<p className="form-error">{errors.pregunta5?.message}</p>
					<label htmlFor="pregunta4" className="form-label">
						11. ¿Nos permites contactarte vía WhatsApp?
					</label>
					<div className="flex items-center">
						<input
							type="radio"
							name="contacto"
							id="preguntaradio"
							{...register('contacto')}
							className="form-input"
							value="Si"
						/>
						<span className="form-input">¡Si!</span>
					</div>
					<div className="flex items-center">
						<input
							type="radio"
							name="contacto"
							id="contacto"
							{...register('contacto')}
							className="form-input "
							value="No"
						/>
						<span className="form-input">No</span>
					</div>
					<p className="form-error">{errors.pregunta4?.message}</p>
				</div>
				<div className="flex justify-center">
					<input
						type="submit"
						value="Enviar"
						className="px-12 py-2 font-bold text-white bg-primary rounded-xl"
					/>
				</div>
			</form>
		</div>
	);
};

export default FormularioS3;
