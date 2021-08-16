import PostsModel from "./PostsModel";

export default class PageModel {
	public content?: PostsModel[];
	public pageable!: any;
	public totalPages!: number;
	public totalElements!: number;
	public sort!: any;
}