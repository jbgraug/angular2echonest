import { Component, View, NgFor } from 'angular2/angular2';
import { FavouritesElementRender } from '../favouritesElementRender/favouritesElementRender';
import { FavStore } from '../../stores/favStore';
import * as Rx from "@reactivex/rxjs";

@Component({
	selector: 'favourites'
})

@View({
	directives: [FavouritesElementRender, NgFor],
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

	constructor(public favStore: FavStore) {
		this.favStore = favStore;
	}

	setArtists(data) {
		this.favouriteArtists = data;
	}

	onInit() {
		this.favStore.favourites.subscribe(data => this.newFavourites = data[0].name);
		this.favStore.favourites.subscribe(data => this.favouriteArtists = data);
	}

}
