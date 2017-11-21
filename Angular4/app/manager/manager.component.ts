import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services/index';

@Component({
    templateUrl: './app/manager/manager.component.html',
    //moduleId: module.id
})
export class ManagerComponent {

    constructor(private alertService: AlertService) {}

    ngOnInit() {
        // auto reset login status
        this.alertService.ShowAlertInfo("Admin menu!");
    }
}
