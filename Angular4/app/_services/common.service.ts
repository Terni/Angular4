import { Injectable } from '@angular/core';
declare var $: any; // hack for jquery chars

@Injectable()
export class CommonService {

    //! This function for replace Body and Title on ModalWindow
    ShowReportForm(): void {

        $(document).on('click','.btn',
            function(e:any) {
                var _target = e.target;

                let modal = $('#DetailModal');
                modal.find('.modal-title').text('Informace o Pozici: ' + $(_target).attr('name'));
                modal.find('.modal-body').text($(_target).attr('title'));
            });
    }

    //! This function for replace date to "input""
    ChangeDateForm(textDate: string): void {
        $('#InputDate').val(textDate);
    }

    ChangeWeekDateForm(textDate1: string, textDate2: string): void {
        $('#InputDateWeek_1').val(textDate1);
        $('#InputDateWeek_2').val(textDate2);
    }

}