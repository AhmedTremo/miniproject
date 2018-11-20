import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiProvider } from "./../../providers/api/api";
import {MovInfoPage} from '../mov-info/mov-info'
import { InternalFormsSharedModule } from '@angular/forms/src/directives';
 
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [ApiProvider]
})

export class SearchPage {
  searchQuery: string = '';
  items: string[];
  intitial:string[];
  posts: any;
  sel:string;
  selPost:any;

 
  constructor(public navCtrl: NavController, public http: Http) {
 
    this.http.get('https://yts.am/api/v2/list_movies.json').map(res => res.json()).subscribe(
		data => {
      this.posts = data.data.movies;
      var i;
      this.items=[];
      for (i = 0; i < this.posts.length; i++) 
       this.items.push(this.posts[i].title);
      console.log(this.items);
      this.intitial=this.items;
		},
		err => {
			console.log("JSON ERROR");
		}
	);
 
  }

  getItems(ev: any) {

    this.items=this.intitial;

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }
     
  logEvent(event,x)
  {  
    
     for(var i=0;i<this.posts.length;i++)
     {if(x==this.posts[i].title)
      {this.selPost=this.posts[i];}
      }
     
    this.getInfo(this.selPost);
    console.log(x);
  }


  getInfo(post) {
    this.navCtrl.push(MovInfoPage, {

      post:post

    });
  }
    

}