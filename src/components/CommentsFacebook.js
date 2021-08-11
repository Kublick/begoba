import React, { useEffect } from 'react';

const CommentsFacebook = () => {
	useEffect(() => {
		const facebookScript = document.createElement('script');
		facebookScript.async = true;
		facebookScript.src = `https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v7.0&appId=241143927734259&autoLogAppEvents=1`;
		document.body.appendChild(facebookScript);
	}, []);

	return (
		<div>
			<div id="fb-root"></div>
			<div
				className="px-8"
				data-href="https://www.incrementatuconsulta.com/"
				data-numposts="15"
				data-width="100%"
			></div>
		</div>
	);
};

export default CommentsFacebook;
