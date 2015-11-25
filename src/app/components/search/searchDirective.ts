import { Directive, View, ElementRef, EventEmitter } from 'angular2/angular2';
import { Echonest } from '../../services/Echonest';
import * as Rx from '@reactivex/rxjs';


@Directive({
  selector: 'input[type=text][autosearch]',
  outputs: [ 'results' ],
})

export class Autosearch {
  results: EventEmitter<Object[]> = new EventEmitter();
  service: Echonest;


  constructor(private elementRef: ElementRef, service: Echonest) {
    this.service = service;
  }

  onInit() {
    Rx.Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
      .map(e => e['target'].value)
      .filter(text => text.length > 2)
      .map(name => this.service.artistSearch(name))
      .mergeAll()
      .subscribe(data => this.results.next(data['response']['artists']))
  }

}