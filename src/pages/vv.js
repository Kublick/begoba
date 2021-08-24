import React from 'react';

import { headerLogo } from '../components/helpers/logos';
import Venta from '../components/Venta';
import Videoplayer from '../components/Videoplayer';

const VideoVenta = () => {
	return (
		<>
			<div className="py-10 bg-gray-100">
				<div className="flex justify-center my-4">
					<span className="mb-4 transform scale-125">{headerLogo} </span>
				</div>
				<div className="flex items-center justify-center py-4 bg-primary">
					<h1 className="px-4 text-2xl font-bold text-center text-white lg:px-0 md:w-3/4 lg:text-5xl">
						¡TU PRÓXIMO PACIENTE A UN CLICK DE DISTANCIA!
					</h1>
				</div>
				<div className="flex flex-col gap-4 py-10">
					<div className="col-span-2 px-10">
						<Videoplayer url={'https://youtu.be/V71rXExM7ug'} />
					</div>
					<div className="flex flex-col items-center gap-4 mt-4 md:text-lg ">
						<h1 className="text-xl font-bold text-center md:text-3xl">
							¡Tu ya eres un éxito! Solo hagamos que se manifieste
						</h1>
					</div>
				</div>
				<Venta />
			</div>
		</>
	);
};

export default VideoVenta;
