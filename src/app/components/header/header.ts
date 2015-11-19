import {Component, View, NgIf} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { FavStore } from '../../stores/favStore';

@Component({
	selector: 'header'
})

@View({
	directives: [RouterLink, NgIf],
	template: `
	<header id="header" class="page-topbar">
		<nav class="cyan">
			<div class="nav-wrapper container">
				<a href="#" class="brand-logo">{{title}}</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a [router-link]="['/Favourites']">My favourites <span *ng-if="newFavourites" class="new badge pink">{{newFavourites}}</span></a></li>
					<li><a [router-link]="['/Search']">Search an artist</a></li>
				</ul>
			</div>
		</nav>
	</header>
	`
})

export class Header {
	title: string;
	favStore: FavStore;
	newFavourites: Number;

	constructor(favStore: FavStore) {
		this.title = 'Angular 2 & Echonest API';
		this.favStore = favStore;
	}

	onInit() {
        this.favStore.favourites.subscribe(data => this.newFavourites = data.length);
		console.log(this.favStore.favourites);
	}



}
