import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFormularios } from '../graphql/queries';

const Formviews = () => {
	const [tableValues, setTableValues] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await API.graphql(graphqlOperation(listFormularios));
			console.log(res.data.listFormularios.items);
			setTableValues(res.data.listFormularios.items);
		};
		getData();
	}, []);

	console.log(tableValues);

	return (
		<div>
			<h1>Resultado de la Encuesta</h1>
			{tableValues.map((t) => (
				<div key={t.id}>
					<p>{t.nombre}</p>
				</div>
			))}
		</div>
	);
};

export default Formviews;
