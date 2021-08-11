import React , { useLayoutEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getMarkdownAsync , initMarkdown } from '../reducer/markdownReducer';
import { Dispatch } from 'redux';
import MarkdownRender from '../views/common/MarkdownRender';
import { RootState } from '../reducer/rootReducer';

function onFindMarkdown(dispatch: Dispatch , uri: string) {
	dispatch(getMarkdownAsync(uri));
}

function onInitMarkdown(dispatch: Dispatch) {
	dispatch(initMarkdown());
}

interface IMarkdownProps {
	uri: string;
}

export default function MarkdownContainer({uri} : IMarkdownProps) {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		onInitMarkdown(dispatch);
		onFindMarkdown(dispatch , uri);
	} , [uri]);

	const { data } = useSelector(
		(state: RootState) => state.markdownReducer);

	return (
		<>
			<MarkdownRender data={data} />
		</>
	);
}