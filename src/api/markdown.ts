import { externalHttp } from '@/core/http';
import { GITHUB_API_URL } from './config';

export const getMarkdown = async(markdownUri: string): Promise<any> => {
	console.log('env ###' , process.env.NODE_ENV);
	const path = markdownUri;
	const url = GITHUB_API_URL + path;
	const response = await externalHttp.get(url);
	return response.data;
};