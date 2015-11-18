import { Injectable } from 'angular2/angular2';
import * as Rx from '@reactivex/rxjs';

let initialArray: any[] = [];

@Injectable()
export class FavStore {

	favourites: Rx.Observable<any[]>;
	updates: Rx.Subject<any[]> = new Rx.Subject<any>();
	addFav: Rx.Subject<any> = new Rx.Subject<any>();
	deleteFav: Rx.Subject<any> = new Rx.Subject<any>();


	constructor() {
		this.favourites = this.updates
							.scan((artists, operation) => {
								return typeof operation === 'object' ? operation.concat(artists) : operation(artists);
							}, initialArray);

		this.addFav
			.map(function(artist) {
				return artist;
			})
			.subscribe(this.updates);

		this.deleteFav
			.map(function(artistToDelete) {
				return function(artists) {
					return artists.filter((artistOfList) => {
						return artistOfList.name !== artistToDelete.name;
					})
				}
			})
			.subscribe(this.updates);

	}

	addFavourite(artistName, artistId) {
		let artist = [{ name: artistName, id: artistId, isNew: true }];
		this.addFav.next(artist)
	}

	deleteFavourite(artistName, artistId) {
		let artist = { name: artistName, id: artistId, isNew: true };
		this.deleteFav.next(artist)
	}

	getFavourites() {
		return this.favourites;
	}
}