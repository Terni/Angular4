import { Component, Input, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from '../_models/index';
//import * as dataInit from './../../assets/init';

@Injectable()
export class DataService {

    constructor(private http: Http) {
        //let restaurants: Restaurant[] = [];
        let obj;
        this.getRestaurants().subscribe(data => obj = data, error => console.log(error));

        //let allrest: Array<Restaurant> = obj;
        console.log('Vystup.');
        console.log(obj);
    }

    public getRestaurants(): Observable<any> {
        return this.http.get('/api/restaurants')
            .map((response: Response) => response.json());
            //.catch(this.handleError);
    }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Error with json file.');
    }
}