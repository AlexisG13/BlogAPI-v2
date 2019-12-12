import { postModel } from '../models/post';
import { APIResponse } from '../utils/utils';
import { PostUpdateBody, PostBody } from '../dto/post';

export async function createPost(post: PostBody): Promise<APIResponse> {
  try {
    const newPost = new postModel({ ...post });
    const result = await newPost.save();
    return { status: 201, response: result };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}

export async function deletePost(postId: string): Promise<APIResponse> {
  try {
    const exists = await postModel.exists({ _id: postId });
    if (!exists) {
      return { status: 404, response: { message: 'Post not found' } };
    }

    const deletedPost = await postModel.findByIdAndDelete(postId);
    if (!deletedPost) {
      return { status: 404, response: { message: 'Post not found' } };
    }
    return { status: 204, response: { message: 'Post deleted successfully' } };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}

export async function getPosts(): Promise<APIResponse> {
  try {
    const posts = await postModel.find().sort({ createdDate: -1 });
    return { status: 200, response: posts };
  } catch {
    return { status: 500, response: { message: 'Internal server errror' } };
  }
}

export async function getSinglePost(postId: string): Promise<APIResponse> {
  try {
    const exists = await postModel.exists({ _id: postId });
    if (!exists) {
      return { status: 404, response: { message: 'Post not found' } };
    }

    const post = await postModel.findById(postId);
    if (!post) {
      return { status: 404, response: { message: 'Post not found' } };
    }
    return { status: 200, response: post };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}

export async function updatePost(newPost: PostUpdateBody): Promise<APIResponse> {
  try {
    const exists = await postModel.exists({ _id: newPost._id });
    if (!exists) {
      return { status: 404, response: { message: 'Post not found' } };
    }

    const updatedPost = await postModel.findOneAndUpdate(
      { _id: newPost._id },
      {
        title: newPost.title,
        content: newPost.content,
        updatedDate: Date.now(),
      },
      { new: true },
    );
    if (!updatedPost) {
      return { status: 404, response: { message: 'Not found' } };
    }
    return { status: 200, response: updatedPost };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}
