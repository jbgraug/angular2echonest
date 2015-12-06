import { Component } from 'angular2/core';
import { HotttlistElementRender } from '../hotttlistElementRender/hotttlistElementRender';
import { Echonest } from '../../services/Echonest';

@Component({
	selector: 'hotttlist',
	directives: [HotttlistElementRender],
	template: `
		<div class="container">
			<div class="row">
				<hotttlist-element class="col s12" [artists]="artists" title="Echonest\'s hotttest artists"></hotttlist-element>
			</div>
		</div>
	`
})

export class Hotttlist {
	artists: Object;

	constructor(private echonest: Echonest) {
	}

	setArtists(data) {
		this.artists = data;
	}

	ngOnInit() {
		this.echonest.topHot()
			.subscribe(data => this.setArtists(data['response']['artists']))
	}

	

}
