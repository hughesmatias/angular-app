import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../_models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() post: Post = {
    title: 'Prueba 421',
    text: "Lorem Lorem....",
    comments: [{
      username: "Username 1",
      comment: "comment comment ...."
    },{
      username: "Username 2345",
      comment: "comment commentcommentcommentcomment ...."
    }]
  }

  ngOnInit() {
  }
}
