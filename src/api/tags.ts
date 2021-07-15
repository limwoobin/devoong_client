import axios from 'axios';
import { TagsModel } from '../models';

export const findTags = async(): Promise<any> => {
    const url = '/tags';
    const response = await axios.get(url);
    return response.data;
}