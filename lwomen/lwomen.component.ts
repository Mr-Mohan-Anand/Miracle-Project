import { Component } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-lwomen',
  templateUrl: './lwomen.component.html',
  styleUrls: ['./lwomen.component.css']
})
export class LwomenComponent {
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


