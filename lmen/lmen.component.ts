import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostService } from '../post.service';
@Component({
  selector: 'app-lmen',
  templateUrl: './lmen.component.html',
  styleUrls: ['./lmen.component.css']
})
export class LmenComponent {

  posts:any[]=[];
  title: any;

  

  constructor(private service:PostService) {}

  

  ngOnInit() {

      this.service.getPosts()

        .subscribe((response: any) => {

          this.posts = response;
          console.log(this.posts)

        });

    }

}

