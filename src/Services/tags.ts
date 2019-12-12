import { APIResponse } from '../utils/utils';
import { postModel } from '../models/post';

export async function addTag(postId: string, tag: string): Promise<APIResponse> {
  try {
    const exists = await postModel.exists({ _id: postId });
    if (!exists) {
      return { status: 404, response: { message: 'Post not found' } };
    }
    if (!tag) {
      return { status: 400, response: { message: 'Bad parameters: No tag was given' } };
    }
    const result = await postModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $push: {
          tags: tag,
        },
      },
      { new: true },
    );

    if (!result) {
      return { status: 404, response: { message: 'Post not found' } };
    }
    return { status: 201, response: result };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}

export async function deleteTag(postId: string, tag: string): Promise<APIResponse> {
  try {
    const exists = await postModel.exists({ _id: postId });
    if (!exists) {
      return { status: 404, response: { message: 'Post not found' } };
    }

    const result = await postModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $pull: {
          tags: tag,
        },
      },
      { new: true },
    );
    if (!result) {
      return { status: 404, response: { message: 'Tag not found' } };
    }
    return { status: 204, response: result };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}

export async function getAllTags(postId: string): Promise<APIResponse> {
  try {
    const exists = await postModel.exists({ _id: postId });
    if (!exists) {
      return { status: 404, response: { message: 'Post not found' } };
    }

    const tags = await postModel.findById(postId).select('tags -_id');
    if (!tags) {
      return { status: 404, response: { message: 'Post not found' } };
    }
    return { status: 200, response: tags.get('tags') };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}

export async function updateTag(postId: string, oldTag: string, newTag: string): Promise<APIResponse> {
  try {
    const exists = await postModel.exists({ _id: postId });
    if (!exists) {
      return { status: 404, response: { message: 'Post not found' } };
    }

    if (!newTag) {
      return { status: 400, response: { message: 'Bad parameters: No tag was given' } };
    }

    const result = await postModel.findOneAndUpdate(
      { _id: postId, tags: oldTag },
      {
        $set: { tags: newTag },
      },
      { new: true },
    );

    if (!result) {
      return { status: 404, response: { message: 'Tag not found' } };
    }
    return { status: 200, response: result };
  } catch {
    return { status: 500, response: { message: 'Internal server error' } };
  }
}
