import { Injectable } from '@angular/core';
declare var $: any; // hack for jquery chars

@Injectable()
export class CommonService {

    ShowReportForm(): void {

        $(document).on('click','.btn',
            function(e:any) {
                var _target = e.target;

                let modal = $('#DetailModal');
                modal.find('.modal-title').text('Informace o Pozici: ' + $(_target).attr('name'));
                modal.find('.modal-body').text($(_target).attr('title'));
            });
    }

    ChangeDateForm(textDate: string): void {

        $('#InputDate').val(textDate);
    }
}