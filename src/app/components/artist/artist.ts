import { Component, Output } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Echonest } from '../../services/Echonest';
import { ArtistRender } from '../artistRender/artistRender';
import { FavStore } from '../../stores/favStore';


@Component({
	selector: 'artist',
	directives: [ArtistRender],
	template: `
	<artist-render [data]="artistData" [bio]="artistBio" [isfavourite]="isFavourite"></artist-render>
	`
})

export class Artist {
	routeParam: RouteParams;
	artistData: Object;
	isFavourite: boolean;
	artistName: string;
	artistBio: Object;

	constructor(private service: Echonest, routeParams: RouteParams, private favStore: FavStore) {
		this.artistName = routeParams.get('name');
	}

	setData(data) {
		this.artistData = data;
	}

	ngOnInit() {


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
