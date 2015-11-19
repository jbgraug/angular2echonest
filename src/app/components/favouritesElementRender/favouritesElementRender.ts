import {Component, View, Input, NgFor} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
	selector: 'favourites-element',
})

@View({
	directives: [NgFor, RouterLink],
	template: 
	`
	<div class="z-depth-1">
        <ul class="collection with-header">
        	<li class="collection-header"><h2 class="header">{{title}}</h2></li>
			<a *ng-for="#artist of artists; #i = index" [router-link]="['/Artist', {name: artist.name}]" class="collection-item"><li>{{i+1}}: {{artist.index}} {{artist.name}}</li></a>
		</ul>
	</div>
	`
})

export class FavouritesElementRender {
	@Input() artists: any;
	@Input() title: string;

	onChange() {
		console.log('ok');
	}


}