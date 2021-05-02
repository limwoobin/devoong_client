import { CategoryType } from '../core/code/CategoryType';
import { BoardTypeCode } from '../core/code/BoardTypeCode';
import { PostTypeCode } from '../core/code/PostTypeCode';

export type CategoryModel = {
    _id: string;
    name: string;
    type: BoardTypeCode | PostTypeCode;
    code: CategoryType;
    routerName: string;
}