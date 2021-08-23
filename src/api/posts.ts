import { Pageable, PageModel, PostsModel, ArchiveGroupModel } from '../models';
import { BASE_URL } from './config';
import { http } from '@/core/http';

export const getPostsAll = async(pageable: Pageable): Promise<PageModel> => {
	const url = BASE_URL + '/posts?page=' + pageable.page;
	const response = await http.get(url);
	return response.data;
};

export const getPosts = async(id: number): Promise<PostsModel> => {
	const url = BASE_URL + '/posts/' + id;
	const response = await http.get(url);
	return response.data;
};

export const getLatestPosts = async(): Promise<PostsModel[]> => {
	const url = BASE_URL + '/posts/latest';
	const response = await http.get(url);
	return response.data;
};

export const getPostsByTags = async(name: string , pageable: Pageable): Promise<PageModel> => {
	const url = BASE_URL + '/posts/tags/' + name + '?page=' + pageable.page;
	const response = await http.get(url);
	return response.data;
};

export const getPostsArchives = async(): Promise<ArchiveGroupModel[]> => {
	const url = BASE_URL + '/posts/archives';
	const response = await http.get(url);
	return response.data;
}