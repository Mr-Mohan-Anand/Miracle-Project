import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-lkids',
  templateUrl: './lkids.component.html',
  styleUrls: ['./lkids.component.css']
})
export class LkidsComponent implements OnInit{
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
