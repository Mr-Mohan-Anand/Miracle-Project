import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit{
  posts:any[]=[];
  title: any;

  

  constructor(private service:PostService) {}

  

  ngOnInit() {

      this.service.getpost2()

        .subscribe((response: any) => {

          this.posts = response;
          console.log(this.posts)

        });

    }

}
