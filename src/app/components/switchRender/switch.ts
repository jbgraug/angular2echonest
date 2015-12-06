import {Component} from 'angular2/angular2';


@Component({
	selector: 'switch-render',
	directives: [],
	template: `
	<div class="switch">
		<label class="white-text">
		Off
			<input type="checkbox">
			<span class="lever"></span>
		On
		</label>
	</div>

	`
})

export class Switch {

}
