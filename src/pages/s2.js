import React from 'react';

import Videoplayer from '../components/Videoplayer';

const S2 = () => {
	return (
		<>
			<div className="grid grid-cols-4">
				<div className="bg-green-500">1</div>
				<div className="col-span-2">
					<Videoplayer url={'https://youtu.be/M4V8T0hl7cA'} />
				</div>

				<div className="bg-blue-400">2</div>
			</div>
		</>
	);
};

export default S2;
