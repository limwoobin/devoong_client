import { CategoryType } from '../code/CategoryType';
import { BoardTypeCode } from '../code/BoardTypeCode';
import { PostTypeCode } from '../code/PostTypeCode';

export type CategoryModel = {
    _id: string;
    name: string;
    type: BoardTypeCode | PostTypeCode;
    code: CategoryType;
    routerName: string;
}