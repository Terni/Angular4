﻿import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


///Service class to call REST API
@Injectable()
export class LoadService {
    constructor(private http: Http) {
    }

    getInitData = (): Observable<Response> => {
        console.log("In getConfiguration of ConfigurationService");
        return this.http.get('./../../assets/init.json').map(res => res.json());
    }
}