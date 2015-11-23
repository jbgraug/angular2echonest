import { Component, View, Output } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { Echonest } from '../../services/Echonest';
import { ArtistRender } from '../artistRender/artistRender';
import { FavStore } from '../../stores/favStore';


@Component({
	selector: 'artist',
})

@View({
	directives: [ArtistRender],
	template: `
	<artist-render [data]="artistData" [bio]="artistBio" [isfavourite]="isFavourite"></artist-render>

	`
})

export class Artist {
	service: Echonest;
	routeParam: RouteParams;
	favStore: FavStore;
	artistData: Object;
	isFavourite: boolean;
	artistName: string;
	artistBio: Object;

	constructor(service: Echonest, routeParams: RouteParams, favStore: FavStore) {
		this.service = service;
		this.artistName = routeParams.get('name');
		this.favStore = favStore;
	}

	setData(data) {
		this.artistData = data;
	}

	onInit() {


		this.service.getArtistData(this.artistName)
		.subscribe((data) => {
			this.setData(data['response']['artist']);
		})

		this.service.getArtistBio(this.artistName)
		.subscribe((data) => {
			this.artistBio = data['0']
		})

		this.favStore.favourites
			.subscribe(data => {
				this.isFavourite = data.find((artist) => {
					return artist.name === decodeURI(this.artistName);
				})
			})

	}

}
