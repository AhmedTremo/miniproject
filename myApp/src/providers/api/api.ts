import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()

export class ApiProvider {



	constructor(public http: HttpClient) {



	}



	getFilms() {

		return this.http.get("https://yts.am/api/v2/list_movies.json");

	}

}