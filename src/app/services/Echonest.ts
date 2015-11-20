import { Injectable } from 'angular2/angular2';
import { Http } from 'angular2/http';

@Injectable()
export class Echonest {
	url: string;
	apiKey: string;
	format: string;



	constructor(public http: Http) {
		this.url = 'http://developer.echonest.com/api/v4/';
		this.apiKey = 'AAXIWZI0HTK1NYTWQ';
		this.format = 'json';

	}


	topHot() {
		let endpoint = 'artist/top_hottt?';
		let url = this.url + endpoint + '&api_key=' + this.apiKey + '&format=' + this.format + '&results=15&start=0&bucket=hotttnesss';
		return this.http.get(url)
			.map(res => res.json())

	}

	getArtistData(name) {
		let endpoint = 'artist/profile?';
		let url = this.url + endpoint + '&api_key=' + this.apiKey + '&name=' + name + '&format=' + this.format + '&bucket=blogs&bucket=images&bucket=genre&bucket=reviews&bucket=news';
		return this.http.get(url)
			.map(res => res.json())
	}


	artistSearch (name) {
	        let endpoint = 'artist/suggest?';
	        let url = this.url + endpoint + '&api_key=' + this.apiKey + '&results=6' + '&name=' + name + '&format=' + this.format;
	        return this.http.get(url)
	            .map(res => res.json());
	}

	getArtistBio (name) {
	        var endpoint = 'artist/biographies?';
	        let url = this.url + endpoint + '&api_key=' + this.apiKey + '&name=' + name + '&format=' + this.format + '&results=1&start=6';
	        return this.http.get(url)
	            .map(res => res.json())
	            .map(res => res.response.biographies);
	}




}

