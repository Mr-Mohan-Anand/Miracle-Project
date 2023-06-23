import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent  implements OnInit{
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
