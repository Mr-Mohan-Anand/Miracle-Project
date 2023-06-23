import { Component } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-lelectronics',
  templateUrl: './lelectronics.component.html',
  styleUrls: ['./lelectronics.component.css']
})
export class LelectronicsComponent {
  posts:any[]=[];
  title: any;

  

  constructor(private service:PostService) {}

  

  ngOnInit() {

      this.service.getpost3()

        .subscribe((response: any) => {

          this.posts = response;
          console.log(this.posts)

        });

    }

}
