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

	constructor(private favStore: FavStore) {
	}

	onInit() {
		this.favStore.favourites.subscribe(data => this.favouriteArtists = data);
		this.favStore.toggleViewed();
	}

}
