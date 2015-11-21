webpackJsonp([2,0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(557);


/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var Rx = __webpack_require__(195);
	var initialState = [];
	var FavStore = (function () {
	    function FavStore() {
	        this.favourites = new Rx.ReplaySubject(-1);
	        this.updates = new Rx.Subject();
	        this.addFav = new Rx.Subject();
	        this.deleteFav = new Rx.Subject();
	        this.markAsViewed = new Rx.Subject();
	        this.updates
	            .scan(function (accumulator, operation) {
	            return operation(accumulator);
	        }, initialState)
	            .subscribe(this.favourites);
	        this.addFav
	            .map(function (artist) {
	            return function (state) {
	                return state.concat(artist);
	            };
	        })
	            .subscribe(this.updates);
	        this.deleteFav
	            .map(function (artist) {
	            return function (state) {
	                return state.filter(function (artists) {
	                    return artists.name !== artist;
	                });
	            };
	        })
	            .subscribe(this.updates);
	        this.markAsViewed
	            .map(function () {
	            return function (state) {
	                return state.map(function (eachArtist) {
	                    return Object.assign({}, eachArtist, { isNew: false });
	                });
	            };
	        })
	            .subscribe(this.updates);
	    }
	    FavStore.prototype.addFavourite = function (artistName, artistId) {
	        var artist = { name: artistName, id: artistId, isNew: true };
	        this.addFav.next(artist);
	    };
	    FavStore.prototype.deleteFavourite = function (artistName) {
	        this.deleteFav.next(artistName);
	    };
	    FavStore.prototype.toggleViewed = function () {
	        this.markAsViewed.next('');
	    };
	    FavStore = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], FavStore);
	    return FavStore;
	})();
	exports.FavStore = FavStore;


/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var http_1 = __webpack_require__(117);
	var Echonest = (function () {
	    function Echonest(http) {
	        this.http = http;
	        this.url = 'http://developer.echonest.com/api/v4/';
	        this.apiKey = 'AAXIWZI0HTK1NYTWQ';
	        this.format = 'json';
	    }
	    Echonest.prototype.topHot = function () {
	        var endpoint = 'artist/top_hottt?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&format=' + this.format + '&results=15&start=0&bucket=hotttnesss';
	        return this.http.get(url)
	            .map(function (res) { return res.json(); });
	    };
	    Echonest.prototype.getArtistData = function (name) {
	        var endpoint = 'artist/profile?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&name=' + name + '&format=' + this.format + '&bucket=blogs&bucket=images&bucket=genre&bucket=reviews&bucket=news';
	        return this.http.get(url)
	            .map(function (res) { return res.json(); });
	    };
	    Echonest.prototype.artistSearch = function (name) {
	        var endpoint = 'artist/suggest?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&results=6' + '&name=' + name + '&format=' + this.format;
	        return this.http.get(url)
	            .map(function (res) { return res.json(); });
	    };
	    Echonest.prototype.getArtistBio = function (name) {
	        var endpoint = 'artist/biographies?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&name=' + name + '&format=' + this.format + '&results=1&start=6';
	        return this.http.get(url)
	            .map(function (res) { return res.json(); })
	            .map(function (res) { return res.response.biographies; });
	    };
	    Echonest = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], Echonest);
	    return Echonest;
	})();
	exports.Echonest = Echonest;


/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(34);
	var hotttlist_1 = __webpack_require__(565);
	var header_1 = __webpack_require__(564);
	var artist_1 = __webpack_require__(558);
	var search_1 = __webpack_require__(567);
	var favourites_1 = __webpack_require__(562);
	var Main = (function () {
	    function Main() {
	    }
	    Main = __decorate([
	        angular2_1.Component({
	            selector: 'main'
	        }),
	        angular2_1.View({
	            directives: [header_1.Header, router_1.RouterOutlet],
	            template: "\n    <header></header>\n    <router-outlet></router-outlet>\n  "
	        }),
	        router_1.RouteConfig([
	            { path: '/', redirectTo: '/home' },
	            { path: '/home', as: 'Home', component: hotttlist_1.Hotttlist },
	            { path: '/artist/:name', as: 'Artist', component: artist_1.Artist },
	            { path: '/search', as: 'Search', component: search_1.Search },
	            { path: '/favourites', as: 'Favourites', component: favourites_1.Favourites },
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], Main);
	    return Main;
	})();
	exports.Main = Main;


/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/_custom.d.ts" />
	var angular2_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(34);
	var http_1 = __webpack_require__(117);
	var Echonest_1 = __webpack_require__(108);
	var favStore_1 = __webpack_require__(72);
	var app_1 = __webpack_require__(556);
	angular2_1.bootstrap(app_1.Main, [
	    angular2_1.FORM_PROVIDERS,
	    router_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    angular2_1.ELEMENT_PROBE_PROVIDERS,
	    Echonest_1.Echonest,
	    favStore_1.FavStore
	]);


/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(34);
	var Echonest_1 = __webpack_require__(108);
	var artistRender_1 = __webpack_require__(560);
	var favStore_1 = __webpack_require__(72);
	var Artist = (function () {
	    function Artist(service, routeParams, favStore) {
	        this.service = service;
	        this.artistName = routeParams.get('name');
	        this.favStore = favStore;
	    }
	    Artist.prototype.setData = function (data) {
	        this.artistData = data;
	    };
	    Artist.prototype.onInit = function () {
	        var _this = this;
	        this.service.getArtistData(this.artistName)
	            .subscribe(function (data) {
	            _this.setData(data.response.artist);
	        });
	        this.service.getArtistBio(this.artistName)
	            .subscribe(function (data) {
	            _this.artistBio = data['0'];
	        });
	        this.favStore.favourites
	            .subscribe(function (data) {
	            _this.isFavourite = data.find(function (artist) {
	                return artist.name === decodeURI(_this.artistName);
	            });
	        });
	    };
	    Artist = __decorate([
	        angular2_1.Component({
	            selector: 'artist',
	        }),
	        angular2_1.View({
	            directives: [artistRender_1.ArtistRender],
	            template: "\n\t<artist-render [data]=\"artistData\" [bio]=\"artistBio\" [isfavourite]=\"isFavourite\"></artist-render>\n\n\t"
	        }), 
	        __metadata('design:paramtypes', [Echonest_1.Echonest, router_1.RouteParams, favStore_1.FavStore])
	    ], Artist);
	    return Artist;
	})();
	exports.Artist = Artist;


/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(34);
	var ArtistCardRender = (function () {
	    function ArtistCardRender() {
	    }
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArtistCardRender.prototype, "artist");
	    ArtistCardRender = __decorate([
	        angular2_1.Component({
	            selector: 'artist-card',
	        }),
	        angular2_1.View({
	            directives: [router_1.RouterLink],
	            template: "\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t\t<span class=\"card-title black-text\">{{artist.name}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-action\">\n\t\t\t\t\t\t<a [router-link]=\"['/Artist', {name: artist.name}]\">See the profile</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArtistCardRender);
	    return ArtistCardRender;
	})();
	exports.ArtistCardRender = ArtistCardRender;


/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var artistReviewRender_1 = __webpack_require__(561);
	var favStore_1 = __webpack_require__(72);
	var switch_1 = __webpack_require__(568);
	var ArtistRender = (function () {
	    function ArtistRender(favStore) {
	        this.isfavourite = true;
	        this.favStore = favStore;
	    }
	    ArtistRender.prototype.switchControl = function (value) {
	        this[value] = event.target['checked'];
	    };
	    ArtistRender.prototype.addFavourite = function (artist, newState) {
	        this.favStore.addFavourite(artist.name, artist.id);
	    };
	    ArtistRender.prototype.removeFavourite = function (data, newState) {
	        this.favStore.deleteFavourite(data.name);
	    };
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArtistRender.prototype, "data");
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArtistRender.prototype, "bio");
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ArtistRender.prototype, "isfavourite");
	    ArtistRender = __decorate([
	        angular2_1.Component({
	            selector: 'artist-render',
	        }),
	        angular2_1.View({
	            directives: [angular2_1.NgIf, angular2_1.NgFor, artistReviewRender_1.ArtistReviewRender, switch_1.Switch, angular2_1.NgIf],
	            template: "\n\t<div *ng-if=\"data\" class=\"cyan\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row valign-wrapper\">\n\n\t\t\t\t\t<div class=\"col s6\">\n\t\t\t\t\t\t<h1 class=\"white-text\">{{data.name}}</h1>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col s2\">\n\t\t\t\t\t<div class=\"switch\">\n\t\t\t\t\t\t<h6 class=\"white-text\">Reviews</h6>\n\t\t\t\t\t\t<switch-render (click)=\"switchControl('reviews')\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col s2\">\n\t\t\t\t\t\t<h6 class=\"white-text\">News</h6>\n\n\n\t\t\t\t\t\t\t<div class=\"switch\">\n\t\t\t\t\t\t\t<switch-render (click)=\"switchControl('news')\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col s2\">\n\t\t\t\t\t\t<h6 class=\"white-text\">Favourite</h6>\n\t\t\t\t\t\t\t<i *ng-if=\"!isfavourite\" class=\"material-icons white-text\" (click)=\"addFavourite(data, !isFavourite)\">star_rate</i>\n\t\t\t\t\t\t\t<i *ng-if=\"isfavourite\" class=\"material-icons yellow-text\" (click)=\"removeFavourite(data, !isFavourite)\">star_rate</i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ng-if=\"bio\" class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-content\" style=\"max-height:250px; overflow:hidden\">\n\t\t\t\t\t\t<h5 class=\"black-text\">Biography</h5>\n\t\t\t\t\t\t<p>{{bio.text}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-action\">\n\t\t\t\t\t\t<a href=\"{{bio.url}}\">Read the full biography</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h4 class=\"pink-text\" *ng-if=!bio>No reviews to show</h4>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ng-if=\"reviews\" class=\"container\">\n\t\t\t<div *ng-if=\"data\" class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<h5 class=\"pink-text text-accent-2\">Reviews for {{data.name}}</h5>\n\t\t\t\t</div>\n\t\t\t\t<artist-review *ng-for=\"#review of data.reviews | slice:0:6\" class=\"col s12 m4\" [review]=review></artist-review>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div *ng-if=\"news\" class=\"container\">\n\t\t\t<div *ng-if=\"data\" class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<h5 class=\"pink-text text-accent-2\">News for {{data.name}}</h5>\n\t\t\t\t</div>\n\t\t\t\t<artist-review *ng-for=\"#news of data.news | slice:0:6\" class=\"col s12 m4\" [review]=news></artist-review>\n\t\t\t</div>\n\t\t</div>\n\n\t"
	        }), 
	        __metadata('design:paramtypes', [favStore_1.FavStore])
	    ], ArtistRender);
	    return ArtistRender;
	})();
	exports.ArtistRender = ArtistRender;


/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var ArtistReviewRender = (function () {
	    function ArtistReviewRender() {
	    }
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArtistReviewRender.prototype, "review");
	    ArtistReviewRender = __decorate([
	        angular2_1.Component({
	            selector: 'artist-review',
	        }),
	        angular2_1.View({
	            directives: [angular2_1.NgIf],
	            template: "\n\t<div class=\"card\" *ng-if=\"review\">\n\t\t<div class=\"card-content\" style=\"max-height:250px; overflow:hidden\">\n\t\t<h5 class=\"pink-text text-lighten-1\">{{review.name}}</h5>\n\t\t<p>{{review.summary}}</p>\n\t\t</div>\n\t\t<div class=\"card-action\">\n\t\t<a href=\"{{review.url}}\">Read the full review</a>\n\t\t</div>\n\t</div>\n\t<h4 class=\"black-text\" *ng-if=\"!review\">No reviews to show</h4>\n\t"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArtistReviewRender);
	    return ArtistReviewRender;
	})();
	exports.ArtistReviewRender = ArtistReviewRender;


/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var favouritesElementRender_1 = __webpack_require__(563);
	var favStore_1 = __webpack_require__(72);
	var Favourites = (function () {
	    function Favourites(favStore) {
	        this.favStore = favStore;
	        this.favStore = favStore;
	    }
	    Favourites.prototype.setArtists = function (data) {
	        this.favouriteArtists = data;
	    };
	    Favourites.prototype.onInit = function () {
	        var _this = this;
	        this.favStore.favourites.subscribe(function (data) { return _this.favouriteArtists = data; });
	        this.favStore.toggleViewed();
	    };
	    Favourites = __decorate([
	        angular2_1.Component({
	            selector: 'favourites'
	        }),
	        angular2_1.View({
	            directives: [favouritesElementRender_1.FavouritesElementRender, angular2_1.NgFor],
	            template: "\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<favourites-element class=\"col s12\" [artists]=favouriteArtists title=\"My favourites\" />\n\t\t\t\t<li *ng-for=\"#artist of favouriteArtists\">{{newFavourites}}</li>\n\t\t\t</div>\n\t\t</div>\n\n\t"
	        }), 
	        __metadata('design:paramtypes', [favStore_1.FavStore])
	    ], Favourites);
	    return Favourites;
	})();
	exports.Favourites = Favourites;


/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(34);
	var FavouritesElementRender = (function () {
	    function FavouritesElementRender() {
	    }
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], FavouritesElementRender.prototype, "artists");
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', String)
	    ], FavouritesElementRender.prototype, "title");
	    FavouritesElementRender = __decorate([
	        angular2_1.Component({
	            selector: 'favourites-element',
	        }),
	        angular2_1.View({
	            directives: [angular2_1.NgFor, router_1.RouterLink],
	            template: "\n\t<div class=\"z-depth-1\">\n        <ul class=\"collection with-header\">\n        \t<li class=\"collection-header\"><h2 class=\"header\">{{title}}</h2></li>\n\t\t\t<a *ng-for=\"#artist of artists; #i = index\" [router-link]=\"['/Artist', {name: artist.name}]\" class=\"collection-item\"><li>{{i+1}}: {{artist.index}} {{artist.name}}</li></a>\n\t\t</ul>\n\t</div>\n\t"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FavouritesElementRender);
	    return FavouritesElementRender;
	})();
	exports.FavouritesElementRender = FavouritesElementRender;


/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(34);
	var favStore_1 = __webpack_require__(72);
	var Header = (function () {
	    function Header(favStore) {
	        this.title = 'Angular 2 & Echonest API';
	        this.favStore = favStore;
	    }
	    Header.prototype.onInit = function () {
	        var _this = this;
	        var artists;
	        this.favStore.favourites
	            .subscribe(function (data) {
	            return _this.newFavourites = data.filter(function (artist) {
	                return artist.isNew === true;
	            });
	        });
	    };
	    Header = __decorate([
	        angular2_1.Component({
	            selector: 'header'
	        }),
	        angular2_1.View({
	            directives: [router_1.RouterLink, angular2_1.NgIf],
	            template: "\n\t<header id=\"header\" class=\"page-topbar\">\n\t\t<nav class=\"cyan\">\n\t\t\t<div class=\"nav-wrapper container\">\n\t\t\t\t<a [router-link]=\"['/Home']\" class=\"brand-logo\">{{title}}</a>\n\t\t\t\t<ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n\t\t\t\t\t<li><a [router-link]=\"['/Favourites']\">My favourites <span *ng-if=\"newFavourites && newFavourites.length > 0\" class=\"new badge pink\">{{newFavourites.length}}</span></a></li>\n\t\t\t\t\t<li><a [router-link]=\"['/Search']\">Search an artist</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\n\t</header>\n\t"
	        }), 
	        __metadata('design:paramtypes', [favStore_1.FavStore])
	    ], Header);
	    return Header;
	})();
	exports.Header = Header;


/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var hotttlistElementRender_1 = __webpack_require__(566);
	var Echonest_1 = __webpack_require__(108);
	var Hotttlist = (function () {
	    function Hotttlist(Echonest) {
	        this.echonest = Echonest;
	    }
	    Hotttlist.prototype.setArtists = function (data) {
	        this.artists = data;
	    };
	    Hotttlist.prototype.onInit = function () {
	        var _this = this;
	        this.echonest.topHot()
	            .subscribe(function (data) { return _this.setArtists(data.response.artists); });
	    };
	    Hotttlist = __decorate([
	        angular2_1.Component({
	            selector: 'hotttlist',
	        }),
	        angular2_1.View({
	            directives: [hotttlistElementRender_1.HotttlistElementRender],
	            template: "\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<hotttlist-element class=\"col s12\" [artists]=\"artists\" title=\"Echonest's hotttest artists\"></hotttlist-element>\n\t\t\t</div>\n\t\t</div>\n\t"
	        }), 
	        __metadata('design:paramtypes', [Echonest_1.Echonest])
	    ], Hotttlist);
	    return Hotttlist;
	})();
	exports.Hotttlist = Hotttlist;


/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(34);
	var HotttlistElementRender = (function () {
	    function HotttlistElementRender() {
	    }
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], HotttlistElementRender.prototype, "artists");
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', String)
	    ], HotttlistElementRender.prototype, "title");
	    HotttlistElementRender = __decorate([
	        angular2_1.Component({
	            selector: 'hotttlist-element',
	        }),
	        angular2_1.View({
	            directives: [angular2_1.NgFor, router_1.RouterLink],
	            template: "\n\t<div class=\"z-depth-1\">\n        <ul class=\"collection with-header\">\n        \t<li class=\"collection-header\"><h2 class=\"header\">{{title}}</h2></li>\n\t\t\t<a *ng-for=\"#artist of artists; #i = index\" [router-link]=\"['/Artist', {name: artist.name}]\" class=\"collection-item\"><li>{{i+1}}: {{artist.index}} {{artist.name}}</li></a>\n\t\t</ul>\n\t</div>\n\t"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HotttlistElementRender);
	    return HotttlistElementRender;
	})();
	exports.HotttlistElementRender = HotttlistElementRender;


/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(34);
	var Echonest_1 = __webpack_require__(108);
	var artistCardRender_1 = __webpack_require__(559);
	var Search = (function () {
	    function Search(service) {
	        this.service = service;
	    }
	    Search.prototype.artistSearch = function ($event, name) {
	        var _this = this;
	        setTimeout(function () {
	            _this.service.artistSearch(name)
	                .subscribe(function (data) {
	                _this.artists = data.response.artists;
	            });
	        }, 400);
	    };
	    Search = __decorate([
	        angular2_1.Component({
	            selector: 'search',
	        }),
	        angular2_1.View({
	            directives: [angular2_1.NgIf, angular2_1.NgFor, router_1.RouterLink, artistCardRender_1.ArtistCardRender],
	            template: "\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input #input (keyup)=\"artistSearch($event, input.value)\" type=\"text\">\n\t\t\t\t\t<label>Artist search</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\" *ng-if=\"artists\">\n\t\t\t<div *ng-for=\"#artist of artists\" class=\"col s12 m4\">\n\t\t\t\t<artist-card [artist]=\"artist\"></artist-card>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<h6 *ng-if=!artists class=\"pink-text text-lighten-1\">Start typing a letter to search for an artist</h6>\n\t</div>\n\n\t"
	        }), 
	        __metadata('design:paramtypes', [Echonest_1.Echonest])
	    ], Search);
	    return Search;
	})();
	exports.Search = Search;


/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(7);
	var Switch = (function () {
	    function Switch() {
	    }
	    Switch = __decorate([
	        angular2_1.Component({
	            selector: 'switch-render',
	        }),
	        angular2_1.View({
	            directives: [],
	            template: "\n\t<div class=\"switch\">\n\t\t<label class=\"white-text\">\n\t\tOff\n\t\t\t<input type=\"checkbox\">\n\t\t\t<span class=\"lever\"></span>\n\t\tOn\n\t\t</label>\n\t</div>\n\n\t"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Switch);
	    return Switch;
	})();
	exports.Switch = Switch;


/***/ }

});
//# sourceMappingURL=app.js.map