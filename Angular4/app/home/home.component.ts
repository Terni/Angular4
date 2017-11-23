import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../_models/index';
import { DataService } from '../_services/index';


@Component({
    templateUrl: './app/home/home.component.html',
    //moduleId: module.id
})
export class HomeComponent {

    restaurants: Restaurant[] = [];


    constructor(private dataService: DataService) { }

    ngOnInit() {

        //this.dataService.getRestaurants().subscribe(data => this.restaurants = data, error => console.log(error));



        /*setTimeout(() => { // through delay from server

        }, 2000);*/



    }
}
