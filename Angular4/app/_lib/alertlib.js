export function ShowAlertSuccessExt(textToShow) {
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
};

export function ShowAlertInfoExt(textToShow) {
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
};

export function ShowAlertErrorExt(textToShow) {
    $.iGrowl({
        type: 'error',
        message: textToShow,
        delay: 0,
        icon: 'vicons-cancel',
        placement: {
            x: 'right',
            y: 'top'
        },
        animation: true,
        animShow: 'bounceIn',
        animHide: 'bounceOutRight'
    });
};