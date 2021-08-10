import externalHttp from '../core/http/externalHttp';

export const getMarkdown = async(markdownUri: string): Promise<any> => {
	console.log('markdown uri ###' , markdownUri);

	const response = await externalHttp.get(markdownUri);
	return response.data;
};