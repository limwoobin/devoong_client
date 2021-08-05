import React , { useLayoutEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getMarkdownAsync } from '../reducer/markdownReducer';
import { Dispatch } from 'redux';
import MarkdownRender from '../views/common/MarkdownRender';


function onFindMarkdown(dispatch: Dispatch , uri: string) {
	dispatch(getMarkdownAsync(uri));
}

interface IMarkdownProps {
	uri: string;
}

export default function MarkdownContainer({uri} : IMarkdownProps) {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		onFindMarkdown(dispatch , uri);
	} , []);

	const { data } = useSelector(state => state.markdownReducer);

	return (
		<>
			<MarkdownRender data={data} />
		</>
	);
}