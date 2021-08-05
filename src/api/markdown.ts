import http from '../core/http/http';

export const getMarkdown = async(githubUri: string): Promise<any> => {
	const uri = githubUri;
	http.defaults.headers['Authorization'] = 'Bearer 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';
	const response = await http.get(uri);
	return response;
};