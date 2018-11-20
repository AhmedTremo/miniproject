import { Component } from '@angular/core';

import { MoviesPage } from '../movies/movies';
import { HomePage } from '../home/home';
import {SearchPage} from '../search/search'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MoviesPage;
  tab3Root=  SearchPage;

  constructor() {

  }
}
