import React from "react";
import SEO from "../components/seo";

function NotFoundPage() {
	return (
		<>
			<SEO title="404: Not found" />
			<div>
				<h2 className="inline-block p-3 my-8 text-2xl font-bold bg-yellow-400">
					Esta pagina no existe...
				</h2>
			</div>
		</>
	);
}

export default NotFoundPage;
