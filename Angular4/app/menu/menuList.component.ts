import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Restaurant, Body, MenuList } from '../_models/index';
import { CommonService } from '../_services/index';
import { DatePipe } from '@angular/common';

@Component({
    templateUrl: './app/menu/menuList.component.html',
    changeDetection: ChangeDetectionStrategy.Default
    //moduleId: module.id
})
export class MenuListComponent {

    date: Date;
    dateFirstSet: Date;
    dateLastSet: Date;
    dateCompare: Date;
    dateComStr: string;

    countDays: number;

    restaurant: Restaurant;
    nameRest: string;
    nameDays: Array<string> = ["Pondeli", "Utery", "Streda", "Ctvrtek", "Patek"];

    weekBody: Array<Body>;



    constructor(private commonService: CommonService) { }

    ngOnInit() {
        this.date = new Date(); //? actual date (Attention: add 5 days for this!)
        this.dateFirstSet = new Date(); //? set date from user (Attention: add 5 days for this!)
        this.dateLastSet = new Date();

        this.countDays =  new Date(this.date.getFullYear(),this.date.getMonth() + 1,0).getDate();
        console.log("Pocet dnu: " + this.countDays);



        //console.log('Data for current restaurant.');
        this.restaurant = JSON.parse(localStorage.getItem('currentRestaurant'));
        //console.log(this.restaurant);

        this.nameRest = this.restaurant.Name;


        var datePipe = new DatePipe("en-US"); //cs-Cz or en-US
        var nameDay = datePipe.transform(this.dateFirstSet, 'EEEE');
        var indexMinusDay = this.dayOfWeekAsInteger(nameDay);
        var indexPlusDay = indexMinusDay;
        //if (indexMinusDay > 0) {
        //    indexMinusDay = indexMinusDay - 1;
        //}

        if (indexPlusDay < 7) indexPlusDay = 7 - indexPlusDay;


        this.dateFirstSet.setDate(this.dateFirstSet.getDate() - indexMinusDay);
        this.dateLastSet.setDate(this.dateLastSet.getDate() + indexPlusDay);


        var formatDate1 = datePipe.transform(this.dateFirstSet, 'dd.MM.yyyy');
        console.log("formatDate1: " + formatDate1);
        var formatDate2 = datePipe.transform(this.dateLastSet, 'dd.MM.yyyy');
        console.log("formatDate2: " + formatDate2);
        //this.commonService.ChangeDateForm(formatDate1.toString(), formatDate2.toString()); //! change input

        this.weekBody = [];


        this.restaurant.Body.forEach((obj1: Body) => {
            console.log(obj1);

            let value = obj1.Date.toString();
            let dd = Number(value.substr(0, 2));
            let mm = Number(value.substr(3, 2));
            let yyyy = Number(value.substr(6, 4));
            //let date = `${dd}/${mm}/${yyyy}`;


            this.dateCompare = new Date(yyyy, mm-1, dd);

            //TODO: tady to musim opravit
            if (this.dateCompare >= this.dateFirstSet && this.dateCompare <= this.dateLastSet) {// for check good date
                this.weekBody.push(obj1); //! deep copy

                console.log("add: " + this.weekBody);
            }

        });


    }




    /** I convert a day string to an number.
    * @method dayOfWeekAsInteger
    * @param {String} day
    * @return {Number} Returns day as number  */
    dayOfWeekAsInteger(day:string) {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(day);
    }

}
