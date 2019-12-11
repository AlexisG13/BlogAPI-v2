import { Post } from '../classes/postClass';
import { validate } from 'class-validator';

export async function postValidator(post: Post): Promise<boolean> {
	const errors = await validate(post);
	if (errors.length > 0) return false;
	return true;
}
