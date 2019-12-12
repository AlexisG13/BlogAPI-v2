import { IsDefined, IsOptional, IsMongoId } from 'class-validator';
import { Request } from 'express';

export class PostBody {
  @IsDefined()
  title: string;
  @IsDefined()
  content: string;
  @IsDefined()
  author: string;
  @IsOptional()
  tags: string[];
  constructor(req: Request) {
    this.title = req.body.title;
    this.content = req.body.content;
    this.author = req.body.author;
    this.tags = req.body.tags;
  }
}

export class PostUpdateBody {
  @IsDefined()
  @IsMongoId()
  _id: string;
  @IsDefined()
  title: string;
  @IsDefined()
  content: string;
  constructor(req: Request) {
    this._id = req.params.id;
    this.title = req.body.title;
    this.content = req.body.content;
  }
}

export class ID {
  @IsDefined()
  @IsMongoId()
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}
