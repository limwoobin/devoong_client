import React , { useLayoutEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getMarkdownAsync , initMarkdown } from '@/reducer/markdownReducer';
import { Dispatch } from 'redux';
import MarkdownRender from '@/views/common/MarkdownRender';
import { RootState } from '@/reducer';
import NoMatch from '@/views/NoMatch';

function onFindMarkdown(dispatch: Dispatch , uri: string) {
	dispatch(getMarkdownAsync(uri));
}

function onInitMarkdown(dispatch: Dispatch) {
	dispatch(initMarkdown());
}

interface IMarkdownContainer {
	uri: string;
}

export default function MarkdownContainer({uri} : IMarkdownContainer) {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (uri) {
			onInitMarkdown(dispatch);
			onFindMarkdown(dispatch , uri);
		}
	} , [uri]);

	const { data , isLoading } = useSelector(
		(state: RootState) => state.markdownReducer);

	return (
		<>
			{uri 
				? <MarkdownRender data={data} isLoading={isLoading} />
				: <NoMatch />
			}
		</>
	);
}