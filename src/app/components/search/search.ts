import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ArtistCardRender} from '../artistCardRender/artistCardRender';
import * as Rx from '@reactivex/rxjs';
import { Autosearch } from './searchDirective';

@Component({
	selector: 'search',
	directives: [ROUTER_DIRECTIVES, ArtistCardRender, Autosearch],
	template: `
	<div class="container">
		<div class="row">
			<div class="card">
				<div class="input-field col s12">
					<input type="text" autosearch (results)="artists = $event">
					<label>Artist search</label>
				</div>
			</div>
		</div>

		<div class="row" *ng-if="artists">
			<div *ng-for="#artist of artists" class="col s12 m4">
				<artist-card [artist]="artist"></artist-card>
			</div>
		</div>

		<h6 *ng-if="!artists" class="pink-text text-lighten-1">Start typing a letter to search for an artist</h6>
	</div>

	`
})

export class Search {
	artists: Object[];
}
