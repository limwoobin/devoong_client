import { externalHttp } from '@/core/http';

export const getMarkdown = async(markdownUri: string): Promise<any> => {
	console.log('env ###' , process.env.NODE_ENV);
	let githubApiUrl = markdownUri;
	if (process.env.NODE_ENV === 'production') {
		githubApiUrl = process.env.REACT_APP_GITHUB_API_URL + markdownUri;
	}

	const response = await externalHttp.get(githubApiUrl);
	return response.data;
};