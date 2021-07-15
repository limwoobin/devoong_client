import axios from 'axios';
import { PostsModel } from '../models';

export const getPostsAll = async(): Promise<any> => {
    const url = '/posts';
    const response = await axios.get(url);
    return response.data;
}

export const getPosts = async(id: number): Promise<PostsModel> => {
    const url = '/posts' + id;
    const response = await axios.get(url);
    return response.data;
}