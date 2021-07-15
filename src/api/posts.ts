import axios from 'axios';

export const getPostsAll = async(): Promise<any> => {
    const url = '/posts';
    const response = await axios.get(url);
    return response.data;
}

export const getPosts = async(id: number): Promise<any> => {
    const url = '/posts' + id;
    const response = await axios.get(url);
    return response.data;
}