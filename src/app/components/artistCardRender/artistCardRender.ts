import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'artist-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
	directives: [ROUTER_DIRECTIVES],
	template: `
				<div class="card">
					<div class="card-content">
						<span class="card-title black-text">{{artist.name}}</span>
					</div>
					<div class="card-action">
						<a [router-link]="['/Artist', {name: artist.name}]">See the profile</a>
					</div>
				</div>
	`
})

export class ArtistCardRender {
	@Input() artist: Object;

}
