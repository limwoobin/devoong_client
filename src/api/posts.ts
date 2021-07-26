import { PageModel, PostsModel } from '../models';
import http from '../core/http/http';

export const getPostsAll = async(): Promise<any> => {
	const url = '/posts';
	const response = await http.get(url);
	return response.data;
};

export const getPosts = async(id: number): Promise<PostsModel> => {
	const url = '/posts/' + id;
	const response = await http.get(url);
	return response.data;
};

export const getLatestPosts = async(): Promise<PostsModel[]> => {
	const url = '/posts/latest';
	const response = await http.get(url);
	return response.data;
};

export const getPostsByTags = async(tagId: number): Promise<PageModel> => {
	const url = '/posts/tags/' + tagId;
	const response = await http.get(url);
	return response.data;
};