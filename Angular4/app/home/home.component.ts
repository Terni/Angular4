import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../_models/index';
import { DataService } from '../_services/index';


@Component({
    templateUrl: './app/home/home.component.html',
    //moduleId: module.id
})
export class HomeComponent {

    restaurants: Restaurant[] = [];
    dataStatus: boolean;

    constructor(private dataService: DataService) { }

    ngOnInit() {

        this.dataService.getRestaurants().subscribe(
            data => this.dataStatus = data,
            error => console.log(error)
        );


        setTimeout(() => { // through delay from server

            console.log('Data for restaurants: ' + this.dataStatus);

            this.restaurants = JSON.parse(localStorage.getItem('allRestaurants'));
            console.log(this.restaurants);
            // for test
            //var allRestaurants = JSON.parse(localStorage.getItem('allRestaurants'));
            //console.log(allRestaurants);
        }, 2000);

    }
}
