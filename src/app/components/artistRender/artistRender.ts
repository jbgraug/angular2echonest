import { Component, Input, ChangeDetectionStrategy } from 'angular2/core';
import { ArtistReviewRender } from '../artistReviewRender/artistReviewRender';
import { FavStore } from '../../stores/favStore';
import { Switch } from '../switchRender/switch';


@Component({
  selector: 'artist-render',
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [ArtistReviewRender, Switch],
  template: `
  <div *ng-if="data" class="cyan">
    <div class="container">
      <div class="row valign-wrapper">
        <div class="col s6">
          <h1 class="white-text">{{data.name}}</h1>
        </div>
        <div class="col s2">
          <div class="switch">
            <h6 class="white-text">Reviews</h6>
            <switch-render (click)="switchControl('reviews')" />
          </div>
        </div>
        <div class="col s2">
          <h6 class="white-text">News</h6>
          <div class="switch">
            <switch-render (click)="switchControl('news')" />
          </div>
        </div>
        <div class="col s2">
          <h6 class="white-text">Favourite</h6>
          <i *ng-if="!isfavourite" class="material-icons white-text" (click)="addFavourite(data, !isFavourite)">star_rate</i>
          <i *ng-if="isfavourite" class="material-icons yellow-text" (click)="removeFavourite(data, !isFavourite)">star_rate</i>
        </div>
      </div>
    </div>
  </div>
  <div *ng-if="bio" class="container">
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-content" style="max-height:250px; overflow:hidden">
            <h5 class="black-text">Biography</h5>
            <p>{{bio.text}}</p>
          </div>
          <div class="card-action">
            <a href="{{bio.url}}">Read the full biography</a>
          </div>
        </div>
      </div>
      <h4 class="pink-text" *ng-if=!bio>No reviews to show</h4>
    </div>
  </div>
  <div *ng-if="reviews" class="container">
    <div *ng-if="data" class="row">
      <div class="col s12">
        <h5 class="pink-text text-accent-2">Reviews for {{data.name}}</h5>
      </div>
      <artist-review *ng-for="#review of data.reviews | slice:0:6" class="col s12 m4" [review]=review></artist-review>
    </div>
  </div>
  <div *ng-if="news" class="container">
    <div *ng-if="data" class="row">
      <div class="col s12">
        <h5 class="pink-text text-accent-2">News for {{data.name}}</h5>
      </div>
      <artist-review *ng-for="#news of data.news | slice:0:6" class="col s12 m4" [review]=news></artist-review>
    </div>
  </div>
	`
})

export class ArtistRender {
  @Input() data: Object;
  @Input() bio: Object;
  @Input() isfavourite: boolean = true;

  constructor(private favStore: FavStore) {
  }

  switchControl(value) {
    this[value] = event.target['checked'];
  }

  addFavourite(artist) {
    this.favStore.addFavourite(artist.name, artist.id);
  }


  removeFavourite(data, newState) {
    this.favStore.deleteFavourite(data.name);
  }

}
