import {Component, Observable, ChangeDetectionStrategy, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FavStore} from '../../stores/favStore';

@Component({
	selector: 'header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	directives: [ROUTER_DIRECTIVES],
	template: `
	<header id="header" class="page-topbar">
		<nav class="cyan">
			<div class="nav-wrapper container">
				<a [router-link]="['/Home']" class="brand-logo">{{title}}</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a [router-link]="['/Favourites']">My favourites <span *ng-if="newfavourites && newfavourites.length > 0" class="new badge pink">{{newfavourites.length}}</span></a></li>
					<li><a [router-link]="['/Search']">Search an artist</a></li>
				</ul>
			</div>
		</nav>
	</header>
	`
})

export class Header {
	title: string;
	@Input() newfavourites: Observable<Object[]>;

	constructor() {
		this.title = 'Angular 2 & Echonest API';
	}
}
