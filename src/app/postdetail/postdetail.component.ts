import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostDetailComponent {
  postId!: number;
  post: any;

  constructor(private postService: PostService) { }

  getPost(): void {
    this.postService.getPostDetail(this.postId).subscribe(
        (data) => {
          this.post = data;
        },
        (error) => {
          console.error('Error fetching post:', error);
        }
      );
  }
}
