import React from 'react';
import ReactPlayer from 'react-player/lazy';

const Videoplayer = () => {
	//{ videoUrl, urlRedirect, buttonText, date }
	// const [button, setButton] = useState(false);

	// const communityButton = () => {
	// 	setTimeout(() => {
	// 		setButton(true);
	// 	}, 1200000);
	// };

	// function timing() {
	// 	setInterval(() => {
	// 		let tempdate = date + 4000;
	// 		let currentDate = Date.now();

	// 		if (currentDate > new Date(tempdate)) {
	// 			setButton(true);
	// 		}
	// 	}, 1000);
	// }
	// timing();

	// const redirect = () => {
	// 	window.open(urlRedirect);
	// };

	return (
		<>
			<div className="player-wrapper">
				<ReactPlayer
					url="https://www.youtube.com/watch?v=rHN1ICqWVcQ"
					// onStart={() => communityButton()}
					className="h-full"
				/>
			</div>

			{/* <div className="btn-container">
				{button ? (
					<button
						className="communityButton communityButton--animated"
						onClick={() => redirect()}
					>
						{buttonText}
					</button>
				) : null}
			</div> */}
		</>
	);
};

export default Videoplayer;
