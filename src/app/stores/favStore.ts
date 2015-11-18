import { Injectable } from 'angular2/angular2';
import * as Rx from '@reactivex/rxjs';

let initialArray: any[] = [];

@Injectable()
export class FavStore {

	favourites: Rx.Observable<Object[]>;
	updates: Rx.Subject<Object> = new Rx.Subject<Object>();
	addFav: Rx.Subject<Object> = new Rx.Subject<Object>();
	deleteFav: Rx.Subject<Object> = new Rx.Subject<Object>();


	constructor() {
		this.favourites = this.updates
							.scan((artists, operation: Function) => {
								return operation(artists);
							}, initialArray);

		this.addFav
			.map(function(artist) {
				return (artists) => {
					return artists.concat(artist);
				}
			})
			.subscribe(this.updates);

		this.deleteFav
			.map(function(artistToDelete) {
				return function(artistsList) {
					return artistsList.filter((artistOfList) => {
						return artistOfList.name !== artistToDelete;
					})
				}
			})
			.subscribe(this.updates);

	}

	addFavourite(artistName, artistId) {
		let artist = { name: artistName, id: artistId, isNew: true };
		this.addFav.next(artist)
	}

	deleteFavourite(artistName) {
		this.deleteFav.next(artistName)
	}

	getFavourites() {
		return this.favourites;
	}
}