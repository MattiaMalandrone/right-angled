import { Component } from '@angular/core';
import { BUFFERED_LIST_DIRECTIVES } from 'right-angled';
import { SHARED_DIRECTIVES, AirportsService, AirportsBufferedListRequest } from '../shared';

@Component({
    directives: [BUFFERED_LIST_DIRECTIVES, SHARED_DIRECTIVES],
    moduleId: module.id,
    templateUrl: 'buffered-list-sample.component.html'
})
export class BufferedListSampleComponent {
    constructor(public airportsService: AirportsService) {
    }

    public loadData = (requestParams: AirportsBufferedListRequest): any => {
        return this.airportsService.getAirportsBuffered(requestParams);
    };
}