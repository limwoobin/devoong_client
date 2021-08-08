import http from '../core/http/http';
import { TagsModel } from '../models';

export const findTags = async(): Promise<TagsModel[]> => {
	const url = 'http://localhost:8080/tags';
	const response = await http.get(url);
	return response.data;
};