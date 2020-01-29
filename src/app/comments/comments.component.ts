import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() username: string;
  @Input() comment: string;
  edit: boolean;

  constructor() {
    this.edit = false;
  }

  ngOnInit() {
  }

  onChangeData() {
    this.edit = true;
    console.log(this, "this");
  }
}
