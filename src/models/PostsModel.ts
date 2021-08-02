import PostsCard from "./PostsCard";
import TagsModel from "./TagsModel";

export default class PostsModel {
	public id?: number;
	public title?: string;
	public contents?: string;
	public views?: number;
	public createdDate?: Date;
	public updatedDate?: Date;
	public tagsResponseList!: TagsModel[];
	public previousPostsCard!: PostsCard;
	public nextPostsCard!: PostsCard;
}
