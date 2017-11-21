import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../_guards/index';


@Component({
    selector: 'my-app',
    templateUrl: './app/nav/app.component.html',
    //styleUrls: [ 'app.component.css'],
    //moduleId: module.id
})
export class AppComponent {
    name = 'Angular 4 restaurant-demo';
    visible = false;

    constructor(
        private router: Router,
        private authGuard: AuthGuard) { }

    ngOnInit() {
        this.visible = this.authGuard.canActivate();

    }
    out = setInterval(() => {

            this.visible = this.authGuard.canActivate();
    }, 1000);

}
