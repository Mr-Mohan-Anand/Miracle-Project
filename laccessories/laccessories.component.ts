import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-laccessories',
  templateUrl: './laccessories.component.html',
  styleUrls: ['./laccessories.component.css']
})
export class LaccessoriesComponent implements OnInit{
  posts:any[]=[];
  title: any;

  

  constructor(private service:PostService) {}

  

  ngOnInit() {

      this.service.getpost5()

        .subscribe((response: any) => {

          this.posts = response;
          console.log(this.posts)

        });

    }

}
