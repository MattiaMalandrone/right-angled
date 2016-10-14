import { Directive, HostBinding, HostListener, KeyValueDiffers, SkipSelf } from '@angular/core';

import { RtListService } from '../list-service';
import { DisabledByStateControl } from './disabled-by-state-control';

@Directive({
    selector: '[rtLoadData]'
})
export class LoadDataDirective extends DisabledByStateControl {
    @HostBinding('disabled')
    public disabled: boolean;

    constructor( @SkipSelf() listService: RtListService, kvDiffers: KeyValueDiffers) {
        super(listService, kvDiffers);
    }
    @HostListener('click')
    public loadData(): void {
        this.listService.loadData();
    }
    public setDisableState(): void {
        this.disabled = this.listService.busy;
    }
}
