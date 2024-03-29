import React, { useEffect } from 'react';

const CommentsFacebook = () => {
	useEffect(() => {
		const facebookScript = document.createElement('script');
		facebookScript.async = true;
		facebookScript.src = `https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v11.0&appId=241143927734259&autoLogAppEvents=1`;
		document.body.appendChild(facebookScript);
	}, []);

	return (
		<div className="w-full">
			<div id="fb-root"></div>
			<div
				data-order-by="reverse_time"
				className="fb-comments"
				data-href="https://www.begoba.com/interno"
				data-numposts="15"
				data-width="100%"
				loading="lazy"
			></div>
		</div>
	);
};

export default CommentsFacebook;
