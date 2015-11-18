import { Component, View } from 'angular2/angular2';
import { HotttlistElementRender } from '../hotttlistElementRender/hotttlistElementRender';
import { Echonest } from '../../services/Echonest';

@Component({
	selector: 'hotttlist',
})

@View({
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
	echonest: Echonest;

	constructor(Echonest: Echonest) {
		this.echonest = Echonest;
	}

	setArtists(data) {
		this.artists = data;
	}

	onInit() {
		this.echonest.topHot()
			.subscribe(data => this.setArtists(data.response.artists))
	}

	

}
