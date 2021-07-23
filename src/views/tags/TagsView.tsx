import React , { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {  } from '../../reducer/tagsReducer';


export default function TagsView(props: any) {
	const id = props.location.state.id;
	const name = props.match.params.name;

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('props' , props);
	} , []);

	return (
		<div>
			
		</div>
	);
}