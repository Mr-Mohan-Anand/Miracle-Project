import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  posts: any[] = [];
  data: any = {}; // Define an object to hold the form data

  constructor(private postService: PostService) {}

  addDataToTable() {
    this.postService.addData(this.data)
      .subscribe(response => {
        console.log('Data added successfully', response);
        // You can update your table or perform any additional actions here
      }, error => {
        console.error('Error adding data', error);
      });
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((response: any) => {
        this.posts = response;
        console.log(this.posts);
      });
  }
}
