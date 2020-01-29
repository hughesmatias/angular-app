import { Comment } from './comment';

export class Post {
  title: string;
  text: string;
  comments: Array<Comment>;
}
