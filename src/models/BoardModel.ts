import { CategoryType } from '../core/code/CategoryType';
import { CommentModel } from './CommentModel';

export type BoardModel = {
    _id: string;
    boardId: number;
    userEmail: string;
    boardType: CategoryType;
    title: string;
    content: any;
    comments: CommentModel[];
    views: number;
    createdAt: Date;
    updatedAt: Date;
}