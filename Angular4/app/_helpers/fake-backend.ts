import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { LoadService } from './../_services/index';

//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map'

//import * as fileRestaurants from './../../assets/init.json';
//import { Restaurant } from './../_models/index';

class LoadData {
    dataJsonFile: any;

    constructor(private loadService: LoadService) {
        this.loadService.getInitData()
            .subscribe(
            (res: any) => {
                this.dataJsonFile = res;
            },
            (error: any) => console.log("error : " + error));
    }

    getData(): any
    {
        return this.dataJsonFile;
    }
}


export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        let testUser = { username: 'admin', password: 'admin'};

        //let testListRestaurants = { test: 'test' };
        var dataJson = { "Restaurant": [{ "Name": "Pour Zlin", "Location": "Zlín", "Body": [{ "Date": "22.11.2017", "MenuList": [{ "Menu": "Text menu22.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "23.11.2017", "MenuList": [{ "Menu": "Text menu23.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "24.11.2017", "MenuList": [{ "Menu": "Text menu24.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "27.11.2017", "MenuList": [{ "Menu": "Text menu27.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "28.11.2017", "MenuList": [{ "Menu": "Text menu28.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "29.11.2017", "MenuList": [{ "Menu": "Text menu29.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "30.11.2017", "MenuList": [{ "Menu": "Text menu30.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "1.12.2017", "MenuList": [{ "Menu": "Text menu1.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "4.12.2017", "MenuList": [{ "Menu": "Text menu4.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "5.12.2017", "MenuList": [{ "Menu": "Text menu.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }] }, { "Name": "Potrefená husa", "Location": "Brno", "Body": [{ "Date": "22.11.2017", "MenuList": [{ "Menu": "Text menu22.", "Price": 122 }, { "Menu": "Text menu22.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "23.11.2017", "MenuList": [{ "Menu": "Text menu23.", "Price": 122 }, { "Menu": "Text menu23.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "24.11.2017", "MenuList": [{ "Menu": "Text menu24.", "Price": 122 }, { "Menu": "Text menu24.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "27.11.2017", "MenuList": [{ "Menu": "Text menu27.", "Price": 122 }, { "Menu": "Text menu27.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "28.11.2017", "MenuList": [{ "Menu": "Text menu28.", "Price": 122 }, { "Menu": "Text menu28.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "29.11.2017", "MenuList": [{ "Menu": "Text menu29.", "Price": 122 }, { "Menu": "Text menu29.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "30.11.2017", "MenuList": [{ "Menu": "Text menu30.", "Price": 122 }, { "Menu": "Text menu30.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "1.12.2017", "MenuList": [{ "Menu": "Text menu1.", "Price": 122 }, { "Menu": "Text menu1.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "4.12.2017", "MenuList": [{ "Menu": "Text menu4.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }, { "Date": "5.12.2017", "MenuList": [{ "Menu": "Text menu.", "Price": 122 }, { "Menu": "Text menu.", "Price": 95 }, { "Menu": "Text menu.", "Price": 110 }] }] }] }
        //let loadData: LoadData;
        //var dataJson = loadData.getData();

        //let stringJson = JSON.stringify(dataJson);
        //let testRestaurants: Restaurant[] = JSON.parse(stringJson);


        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // fake authenticate api end point
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());

                // check user credentials and return fake jwt token if valid
                if (params.username === testUser.username && params.password === testUser.password) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: { token: 'fake-jwt-token' } })
                    ));
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200 })
                    ));
                }
            }

            // fake users api end point
            if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return test users if valid, this security is implemented server side
                // in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: [testUser] })
                    ));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }

            // fake restaurants api end point
            if (connection.request.url.endsWith('/api/restaurants') && connection.request.method === RequestMethod.Get) {

                connection.mockRespond(new Response(
                    //new ResponseOptions({ status: 200, body: [testListRestaurants] })
                    new ResponseOptions({ status: 200, body: [dataJson] })
                ));
            }

        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};