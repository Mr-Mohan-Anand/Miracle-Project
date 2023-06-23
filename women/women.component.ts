import { Component } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  posts:any[]=[];
  title: any;

  

  constructor(private service:PostService) {}

  

  ngOnInit() {

      this.service.getpost1()

        .subscribe((response: any) => {

          this.posts = response;
          console.log(this.posts)

        });

}
}
