import {Component, View, Input, ChangeDetectionStrategy} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';


@Component({
	selector: 'artist-card',
    changeDetection: ChangeDetectionStrategy.OnPush
})

@View({
	directives: [RouterLink],
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
