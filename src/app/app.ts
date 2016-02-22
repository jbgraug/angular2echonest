import {Directive, Component, ElementRef} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

import {Hotttlist} from './components/hotttlist/hotttlist';
import {Header} from './components/header/header';
import {Artist} from './components/artist/artist';
import {Search} from './components/search/search';
import {Favourites} from './components/favourites/favourites';
import {FavStore} from './stores/favStore';

@Component({
  selector: 'main',
  directives: [Header, ROUTER_DIRECTIVES],
  template: `
    <header [newfavourites]="newfavourites"></header>
    <router-outlet></router-outlet>
  `
})

@RouteConfig([

  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', as: 'Home', component: Hotttlist },
  { path: '/artist/:name', as: 'Artist', component: Artist },
  { path: '/search', as: 'Search', component: Search },
  { path: '/favourites', as: 'Favourites', component: Favourites }

])

export class Main {
  newfavourites: any;

  constructor(private favStore: FavStores) {
  }

  ngOnInit() {
    this.favStore.favourites
      .subscribe(data =>
        this.newfavourites = data.filter((artist) => {
          return artist.isNew === true
        }
        ));
  }

}