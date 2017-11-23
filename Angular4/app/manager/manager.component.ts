import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
    templateUrl: './app/manager/manager.component.html',
    //moduleId: module.id
})
export class ManagerComponent {
    users: User[] = [];


    constructor(private alertService: AlertService, private userService: UserService) {}

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers().subscribe(
            users => {
                this.users = users;
            }
        );

        this.alertService.ShowAlertInfo("Aministration");

        setTimeout(() => { // through delay from server
            if (this.users.length > 0) {
                this.alertService.ShowAlertInfo("Manager is: " + this.users[0].username);
            }
        }, 2000);



    }
}
