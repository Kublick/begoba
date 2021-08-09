import React from 'react';
import { mainLogo } from '../components/helpers/logos';

const Gracias = () => {
	return (
		<div>
			<div className="flex justify-center transform scale-75">{mainLogo}</div>
			<div className="p-8 bg-primary-light lg:px-20">
				<h1 className="text-2xl text-center lg:text-4xl">
					Para finalmente <span className="font-semibold">COMPLETAR</span> tu{' '}
					<span className="font-semibold">REGISTRO</span> faltan
					<span className="font-semibold"> DOS PASOS</span> muy pequeños e
					IMPORTANTES
				</h1>
				<div className="grid grid-cols-2 my-6">
					<div>
						<p className="text-lg font-bold text-center md:text-2xl text-primary">
							¡Nos vemos en el taller!
						</p>
					</div>
					<div className="flex flex-col gap-6">
						<p>
							<span className="font-semibold">UNIRTE</span> al{' '}
							<span className="font-semibold">GRUPO PRIVADO</span> en{' '}
							<span className="font-semibold">WHATSAPP</span> para recibir todas
							las <span className="font-semibold">NOTIFICACIONES</span> de esta
							semana del <span>TALLER</span> sólo da click aquí mismo.
						</p>

						<button className="w-3/4 btn-green">Unirme AL GRUPO</button>

						<p>
							Ir a tu <span className="font-semibold">BANDEJA</span> de
							<span className="font-semibold"> CORREO</span> con el cual te
							registraste a esta <span>SEMANA</span>
							del <span className="font-semibold">TALLER</span> y busca el
							<span className="font-semibold"> CORREO</span> con el
							<span className="font-semibold"> TÍTULO</span>:
						</p>

						<p>
							En este <span className="font-semibold"> CORREO </span>
							viene un <span className="font-semibold"> LINK </span>
							que tendrás que <span className="font-semibold"> PRESIONAR </span>
							para
							<span className="font-semibold"> AUTORIZARME </span> a que te{' '}
							<span className="font-semibold"> ENVÍE </span>
							por este medio el
							<span className="font-semibold"> CUADERNO DE TRABAJO </span>
							con el cual vamos a entrenar juntos y los detalles del taller como
							el temario y los horarios, si no lo haces tristemente no podré
							enviártelo
						</p>
						<p className="self-end text-2xl text-secondary font-cursive">
							Gracias por Registrarte
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gracias;
