import React from 'react';
import { Direction } from '../../core/enums';
import { Link } from 'react-router-dom';
import './posts.scss';

interface IPostsBox {
	id?: number;
	title?: string;
	state?: Direction;
	emptyMessage?: string;
}

export default function PostsBox(props: IPostsBox) {
	const { state , id , title , emptyMessage } = props;

	return (
		<div>
			{!emptyMessage ?
				<Link key={id} to={{ pathname: `/posts/${id}` , state: {id}}}>
					<div className="blockArea">
						{state} - {title}
					</div>
				</Link> :
				<div className="blockArea">
					<label>{emptyMessage}</label>
				</div>
			}
		</div>
	);
}