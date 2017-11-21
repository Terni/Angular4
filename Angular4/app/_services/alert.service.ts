import { Injectable } from '@angular/core';
declare var $: any; // hack for jquery chars

@Injectable()
export class AlertService {
    ShowAlertSuccess(textToShow: string): void {
        $.iGrowl({
            type: 'success',
            message: textToShow,
            icon: 'vicons-forward',
            placement: {
                x: 'left',
                y: 'top'
            },
            animation: true,
            animShow: 'bounceIn',
            animHide: 'bounceOutRight'
        });
    }

    ShowAlertInfo(textToShow: string): void {

        $.iGrowl({
            type: 'notice',
            message: textToShow,
            icon: 'vicons-forward',
            placement: {
                x: 'right',
                y: 'top'
            },
            animation: true,
            animShow: 'bounceIn',
            animHide: 'bounceOut'
        });
    }

    ShowAlertError(textToShow: string): void {
        $.iGrowl({
            type: 'error',
            message: textToShow,
            delay : 0,
            icon: 'vicons-cancel',
            placement: {
                x: 'right',
                y: 'top'
            },
            animation: true,
            animShow: 'bounceIn',
            animHide: 'bounceOutRight'
        });
    }
}

