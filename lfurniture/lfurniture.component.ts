import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-lfurniture',
  templateUrl: './lfurniture.component.html',
  styleUrls: ['./lfurniture.component.css']
})
export class LfurnitureComponent implements OnInit{
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
