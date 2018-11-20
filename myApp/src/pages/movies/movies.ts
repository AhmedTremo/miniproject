import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiProvider } from "./../../providers/api/api";
import {MovInfoPage} from '../mov-info/mov-info'
 
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [ApiProvider]
})

export class MoviesPage {
 
  posts: any;
 
  constructor(public navCtrl: NavController, public http: Http) {
 
    this.http.get('https://yts.am/api/v2/list_movies.json').map(res => res.json()).subscribe(
		data => {
			this.posts = data.data.movies;
		},
		err => {
			console.log("JSON ERROR");
		}
	);
 
  }
  logEvent(event,post) {
    this.navCtrl.push(MovInfoPage, {

      post:post

    });
  }
    

}