import { Component, View } from 'angular2/angular2';
import { HotttlistElementRender } from '../hotttlistElementRender/hotttlistElementRender';
import { FavStore } from '../../stores/favStore';

Component({
	selector: 'favourite-list',
})

View({
	directives: [FavouritesList],
	template: `
	<div class="container">
		<div class="row">
			<hotttlist-element class="col s12" [artists]="artists" title="our favourite artists"></hotttlist-element>
		</div>
	</div>
	`
})

export class Hotttlist {
	artists: Object;
	favStore: FavStore;
	onstructor(favStore : FavStore) {
		this.favStore = favStore;
	}
	getArtists(data) {
		this.artists = data;
	}
	onInit() {
		his.echonest.topHot()
		.subscribe(data => this.setArtists(data.response.artists))
	}
	

}
