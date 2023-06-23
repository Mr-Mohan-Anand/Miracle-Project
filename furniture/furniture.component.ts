import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  posts:any[]=[];
  title: any;

  

  constructor(private service:PostService) {}

  

  ngOnInit() {

      this.service.getpost4()

        .subscribe((response: any) => {

          this.posts = response;
          console.log(this.posts)

        });

    }

}
