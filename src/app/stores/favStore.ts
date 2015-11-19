import { Injectable } from 'angular2/angular2';
import * as Rx from '@reactivex/rxjs';

let initialState: any[] = [];

@Injectable()
export class FavStore {

	favourites: Rx.ReplaySubject<any[]> = new Rx.ReplaySubject<any>(-1);
	updates: Rx.Subject<any> = new Rx.Subject<any>();
	addFav: Rx.Subject<any> = new Rx.Subject<any>();
	deleteFav: Rx.Subject<any> = new Rx.Subject<any>();


	constructor() {
		this.updates
				.scan((accumulator: Object[], operation: Function) => {
					return operation(accumulator);
					}, initialState)
				.subscribe(this.favourites);

		this.addFav
			.map(function(artist) {
				console.log(artist);
				return (state) => {
					return state.concat(artist);
				}
			})
			.subscribe(this.updates);

		this.deleteFav
			.map(function(artist) {
				return function(state) {
					return state.filter((artists) => {
						return artists.name !== artist;
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

}