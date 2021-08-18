import Pageable from "./Pageable";

export default class TagsByPostsModel {
	constructor(tagId: number , pageable: Pageable) {
		this.tagId = tagId;
		this.pageable = pageable;
	}
	
	public tagId?: number;
	public pageable?: Pageable;
}
