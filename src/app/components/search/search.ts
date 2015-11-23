import {Component, View, NgIf, NgFor} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { Echonest } from '../../services/Echonest';
import {ArtistCardRender} from '../artistCardRender/artistCardRender';
import * as Rx from '@reactivex/rxjs';

@Component({
	selector: 'search',
})

@View({
	directives: [NgIf, NgFor, RouterLink, ArtistCardRender],
	template: `
	<div class="container">
		<div class="row">
			<div class="card">
				<div class="input-field col s12">
					<input #input (keyup)="artistSearch($event, input.value)" type="text">
					<label>Artist search</label>
				</div>
			</div>
		</div>

		<div class="row" *ng-if="artists">
			<div *ng-for="#artist of artists" class="col s12 m4">
				<artist-card [artist]="artist"></artist-card>
			</div>
		</div>

		<h6 *ng-if=!artists class="pink-text text-lighten-1">Start typing a letter to search for an artist</h6>
	</div>

	`
})

export class Search {
	service: Echonest;
	artists: Object;

	constructor(service: Echonest) {
		this.service = service;
	}

	artistSearch($event, name) {
		setTimeout(() => {
			this.service.artistSearch(name)
			.subscribe((data) => {
				this.artists = data['response']['artists'];
			});
		}, 400);

	}

}
