import {
	Length,
	validate,
	IsDefined,
	IsNotEmpty,
	IsOptional
} from 'class-validator';

export class PostBody {
	@IsDefined()
	title: string;
	@IsDefined()
	content: string;
	@IsDefined()
	author: string;
	@IsOptional()
	tags: string[];
	@IsOptional()
	comments: string[];
	constructor(
		title: string,
		content: string,
		author: string,
		tags: string[],
		comments: string[]
	) {
		this.title = title;
		this.content = content;
		this.author = author;
		this.tags = tags;
		this.comments = comments;
	}
}

export class PostUpdateBody {
	@IsDefined()
	title: string;
	@IsDefined()
	content: string;
	constructor(title: string, content: string) {
		this.title = title;
		this.content = content;
	}
}
