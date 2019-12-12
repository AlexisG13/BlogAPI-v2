import { postModel } from '../models/post';
import { ObjectID } from 'bson';
import { APIResponse } from '../utils/utils';
import { CommentBody } from '../dto/commentClass';

export async function deleteComment(postId: string, idComment: string): Promise<APIResponse> {
  try {
    const deletedComment = await postModel.findOneAndUpdate(
      { _id: postId },
      {
        $pull: { comments: { _id: idComment } },
      },
      { new: true },
    );
    if (!deletedComment) {
      return { status: 404, response: { message: 'Post not found' } };
    }
    return { status: 204, response: deletedComment };
  } catch {
    return { status: 500, response: { msg: 'Internal server error' } };
  }
}

export async function getAllComments(postId: string): Promise<APIResponse> {
  try {
    const comments = await postModel.findById(postId).select('comments -_id');
    if (!comments) {
      return { status: 404, response: { message: 'Post not found' } };
    }
    return { status: 200, response: comments.get('comments') };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}

export async function postComment(postId: string, comment: CommentBody): Promise<APIResponse> {
  try {
    const newComment = {
      content: comment.content,
      author: comment.author,
    };
    const result = await postModel.findOneAndUpdate(
      { _id: postId },
      {
        $push: { comments: newComment },
      },
      { new: true },
    );
    if (!result) {
      return { status: 404, response: { message: 'Post not found' } };
    }
    return { status: 201, response: result };
  } catch (error) {
    console.log(error);
    return { status: 500, response: { message: 'Internal server error' } };
  }
}

export async function updateComment(postId: string, commentId: string, content: string): Promise<APIResponse> {
  try {
    const result = await postModel.findOneAndUpdate(
      { _id: postId, 'comments._id': commentId },
      {
        $set: { 'comments.$.content': content },
      },
      { new: true },
    );
    if (!result) {
      return { status: 404, response: { message: 'Resource not found' } };
    }
    return { status: 200, response: result };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}
