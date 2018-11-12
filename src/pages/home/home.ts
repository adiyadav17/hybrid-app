import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  posts: any;
  constructor(public http: Http) {
    this.http.get(this.apiUrl).map(res => res.json()).subscribe(data => {
        this.posts = data;
        console.log(this.posts);
    });
  }
}
