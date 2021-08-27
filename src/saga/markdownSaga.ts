import * as API from '@/api/markdown';
import { call , put , takeEvery } from 'redux-saga/effects'; 
import { GET_MARKDOWN_ASYNC , INIT_MARKDOWN , getMarkdown , initMarkdownComplete }  from '@/reducer/markdownReducer';

export default function* markdownSaga() {
	yield takeEvery(GET_MARKDOWN_ASYNC , getMarkdownSaga);
	yield takeEvery(INIT_MARKDOWN , initMarkdownSaga);
}

function* getMarkdownSaga({payload: githubUri}: any) {
	try {
		const response: string = yield call(API.getMarkdown , githubUri);
		yield put(getMarkdown(response));
	} catch(error) {
		console.log('error ###' , error);
	}
}

function* initMarkdownSaga() {
	yield put(initMarkdownComplete());
}