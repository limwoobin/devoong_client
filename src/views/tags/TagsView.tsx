import React , { useState , useEffect } from 'react';


export default function TagsView(props: any) {
	const id = props.location.state.id;
	const name = props.match.params.name;

	useEffect(() => {
		console.log('props' , props);
	} , []);

	return (
		<div>
			
		</div>
	);
}