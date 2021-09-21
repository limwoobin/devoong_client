export default class ErrorModel {
	constructor() {
		this.isError = false;
	}

	public isError?: boolean;
	public code?: number;
	public message?: string;
}