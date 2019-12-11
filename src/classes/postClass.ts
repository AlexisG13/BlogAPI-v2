import { Length, validate, IsDefined, IsNotEmpty } from 'class-validator';

export class Post {
	@Length(5, 25)
	title: string;
	@Length(1, 4000)
	content: string;

	constructor(title: string, content: string) {
		this.title = title;
		this.content = content;
	}
}

