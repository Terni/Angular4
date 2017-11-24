import { Component, OnInit, Pipe, PipeTransform, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';

import { Restaurant, Body, MenuList } from '../_models/index';
import { DataService, CommonService } from '../_services/index';


import { DatePipe } from '@angular/common';
/*
@Pipe({
    name: 'dateFormatPipe',
})
export class dateFormatPipe implements PipeTransform {
    transform(value: string) {
        var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'dd.MM.yyyy');
        return value;
    }
}*/




@Component({
    templateUrl: './app/home/home.component.html',
    changeDetection: ChangeDetectionStrategy.Default
    //moduleId: module.id
})
export class HomeComponent {

    //restaurants: Restaurant[] = [];
    restaurants: any;
    restCurrent: Restaurant;
    restCurrentList: Restaurant[] =[];
    dataStatus: boolean;

    date: Date;
    dateCurrentSet: Date;


    constructor(private dataService: DataService, private commonService: CommonService) { }

    ngOnInit() {
        this.date = new Date();
        this.dateCurrentSet = new Date();

        this.dataService.getRestaurants().subscribe(
            data => this.dataStatus = data,
            error => console.log(error)
        );


        setTimeout(() => { // through delay from server

            console.log('Data for restaurants: ' + this.dataStatus);

            this.restaurants = JSON.parse(localStorage.getItem('allRestaurants'));
            console.log(this.restaurants);
            //var res = localStorage.getItem('allRestaurants');
            //console.log(res);

            // for test
            //console.log(this.restaurants.Restaurants.Restaurant[0].Name);
            //console.log(this.restaurants.Restaurants.Restaurant[0].Location);

            //this.restCurrentList = this.restaurants.Restaurants.Restaurant;

            this.commonService.ShowReportForm(); // for modal windows


            this.restaurants.Restaurants.Restaurant.forEach((obj1: Restaurant) => {
                console.log(obj1);

                this.restCurrent = Object.assign({}, obj1);  //! deep copy
                this.restCurrent.Body = []; //! clear array

                obj1.Body.forEach((obj2: Body) => {
                    console.log(obj2);


                    var datePipe = new DatePipe("en-US");
                    var formatDate = datePipe.transform(this.date, 'dd.MM.yyyy');


                    if (obj2.Date.toString() === formatDate.toString()) {// for check good date
                        this.restCurrent.Body.push(obj2);
                        console.log("add");
                    }

                });

                if (this.restCurrent.Body.length > 0) {
                    this.restCurrentList.push(this.restCurrent);
                }



            });

            // for test
            //var allRestaurants = JSON.parse(localStorage.getItem('allRestaurants'));
            //console.log(allRestaurants);
        }, 2000);

    }


    OnClickRight() {
        this.dateCurrentSet.setDate(this.dateCurrentSet.getDate() + 1);
        this.restCurrentList = [];

        console.log('Data for restaurants: ' + this.dataStatus);

        this.restaurants = JSON.parse(localStorage.getItem('allRestaurants'));
        //console.log(this.restaurants);

        this.commonService.ShowReportForm(); // for modal windows

        //! check all items
        this.restaurants.Restaurants.Restaurant.forEach((obj1: Restaurant) => {
            //console.log(obj1);

            this.restCurrent = Object.assign({}, obj1);  //! deep copy
            this.restCurrent.Body = []; //! clear array

            obj1.Body.forEach((obj2: Body) => {
                //console.log(obj2);

                var datePipe = new DatePipe("en-US");
                var formatDate = datePipe.transform(this.dateCurrentSet, 'dd.MM.yyyy');
                this.commonService.ChangeDateForm(formatDate.toString()); //! change input

                if (obj2.Date.toString() === formatDate.toString()) {// for check good date
                    this.restCurrent.Body.push(obj2);
                    //console.log("add");
                }

            });

            if (this.restCurrent.Body.length > 0) {
                this.restCurrentList.push(this.restCurrent);
            }
        });
    }

    OnClickLeft() {
        this.dateCurrentSet.setDate(this.dateCurrentSet.getDate() - 1);

        this.restCurrentList = [];

        console.log('Data for restaurants: ' + this.dataStatus);

        this.restaurants = JSON.parse(localStorage.getItem('allRestaurants'));
        //console.log(this.restaurants);

        this.commonService.ShowReportForm(); // for modal windows

        //! check all items
        this.restaurants.Restaurants.Restaurant.forEach((obj1: Restaurant) => {
            //console.log(obj1);

            this.restCurrent = Object.assign({}, obj1);  //! deep copy
            this.restCurrent.Body = []; //! clear array

            obj1.Body.forEach((obj2: Body) => {
                //console.log(obj2);

                var datePipe = new DatePipe("en-US");
                var formatDate = datePipe.transform(this.dateCurrentSet, 'dd.MM.yyyy');
                this.commonService.ChangeDateForm(formatDate.toString()); //! change input

                if (obj2.Date.toString() === formatDate.toString()) {// for check good date
                    this.restCurrent.Body.push(obj2);
                    //console.log("add");
                }

            });

            if (this.restCurrent.Body.length > 0) {
                this.restCurrentList.push(this.restCurrent);
            }
        });
    }


}
