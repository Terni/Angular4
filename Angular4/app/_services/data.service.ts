import { Component, Input, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from '../_models/index';
//import * as dataInit from './../../assets/init';

@Injectable()
export class DataService {
    // variables
    restaurants: Restaurant[] = [];

    constructor(private http: Http) { }

    // methods
    getRestaurants(): Observable<boolean> {

        // get restaurants from api
        return this.http.get('/api/restaurants')
            .map((response: Response) => {
                let result = response.json();
                if (result) {
                    // store result with restaurants
                    localStorage.setItem('allRestaurants', JSON.stringify({ restaurants: result }));

                    return true;
                } else {
                    return false;
                }

            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Error with json file.');
    }
}