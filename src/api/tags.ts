import axios from 'axios';

export const findTags = async(): Promise<any> => {
    const url = '/tags';
    const response = await axios.get(url);
    return response.data;
}