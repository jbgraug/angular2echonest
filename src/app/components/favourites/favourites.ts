import {Component} from 'angular2/core';
import {FavouritesElementRender} from '../favouritesElementRender/favouritesElementRender';
import {FavStore} from '../../stores/favStore';
import * as Rx from "@reactivex/rxjs";

@Component({
	selector: 'favourites',
	directives: [FavouritesElementRender],
	template: `
		<div class="container">
			<div class="row">
				<favourites-element class="col s12" [artists]=favouriteArtists title="My favourites" />
				<li *ng-for="#artist of favouriteArtists">{{newFavourites}}</li>
			</div>
		</div>
	`
})

export class Favourites {
	favouriteArtists: any[];
	newFavourites: any;

	constructor(private favStore: FavStore) {
	}

	ngOnInit() {
		this.favStore.favourites.subscribe(data => this.favouriteArtists = data);
		this.favStore.toggleViewed();
	}

}
