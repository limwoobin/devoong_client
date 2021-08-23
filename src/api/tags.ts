import { http } from '@/core/http';
import { TagsModel } from '../models';
import { BASE_URL } from './config';

export const findTags = async(): Promise<TagsModel[]> => {
	const url = BASE_URL + '/tags';
	const response = await http.get(url);
	return response.data;
};