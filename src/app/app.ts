/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Hotttlist} from './components/hotttlist/hotttlist';
import {Header} from './components/header/header';
import {Artist} from './components/artist/artist';
import {Search} from './components/search/search';
import {Favourites} from './components/favourites/favourites';
import { FavStore } from './stores/favStore';





@Component({
	selector: 'main'
})

@View({
  directives: [Header, RouterOutlet],
    template: `
    <header [newfavourites]="newfavourites"></header>
    <router-outlet></router-outlet>
  `
})

@RouteConfig([

	{ path: '/',					redirectTo: '/home'},
	{ path: '/home',				as: 'Home',				component: Hotttlist},
	{ path: '/artist/:name',		as: 'Artist',			component: Artist},
	{ path: '/search', 				as: 'Search', 			component: Search },
	{ path: '/favourites', 			as: 'Favourites', 		component: Favourites },

])

export class Main {
	favStore: FavStore;
	newfavourites: any;

	constructor(favStore: FavStore) {
		this.favStore = favStore;
	}

	onInit() {
        this.favStore.favourites
			.subscribe(data =>
				this.newfavourites = data.filter((artist) => {
					return artist.isNew === true
				}
				));
	}

}