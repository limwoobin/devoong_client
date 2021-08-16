import { PageModel, PostsModel } from '../models';
import http from '../core/http/http';

export const getPostsAll = async(): Promise<PageModel> => {
	const url = 'http://localhost:8080/posts';
	const response = await http.get(url);
	return response.data;
};

export const getPosts = async(id: number): Promise<PostsModel> => {
	const url = 'http://localhost:8080/posts/' + id;
	const response = await http.get(url);
	return response.data;
};

export const getLatestPosts = async(): Promise<PostsModel[]> => {
	const url = 'http://localhost:8080/posts/latest';
	const response = await http.get(url);
	return response.data;
};

export const getPostsByTags = async(tagId: number): Promise<PageModel> => {
	const url = 'http://localhost:8080/posts/tags/' + tagId;
	const response = await http.get(url);
	return response.data;
};