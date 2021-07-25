import http from '../core/http/http';
import { TagsModel } from '../models';

export const findTags = async(): Promise<TagsModel[]> => {
	const url = '/tags';
	const response = await http.get(url);
	return response.data;
};