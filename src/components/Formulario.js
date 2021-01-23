import React from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		if (errors) {
			console.log(errors);
		}
	};

	return (
		<>
			<form className="mx-4" onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="nombre" className="block font-bold">
					Nombre Completo
				</label>
				<input
					type="text"
					name="nombre"
					className="block mb-4 lg:w-64"
					ref={register}
				/>
				<label htmlFor="email" className="block font-bold">
					Email
				</label>
				<input
					type="email"
					name="email"
					className="block mb-4 lg:w-64"
					ref={register({ required: true })}
				/>
				<input
					type="submit"
					value="Enviar"
					className="px-4 py-2 text-white bg-black rounded-lg outline-none hover:bg-gray-500"
				/>
			</form>
		</>
	);
};

export default Formulario;
