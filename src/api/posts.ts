import axios from 'axios';
import { PostsModel } from '../models';

export const getPostsAll = async(): Promise<PostsModel[]> => {
    const url = 'http://localhost:8080/posts';
    const response = await axios.get(url);
    return response.data;
}

export const getPosts = async(id: number): Promise<PostsModel> => {
    const url = 'http://localhost:8080/posts/' + id;
    const response = await axios.get(url);
    return response.data;
}