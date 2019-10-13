import { Injectable, EventEmitter } from '@angular/core';


@Injectable()

export class UserService {
    public availableTabs: EventEmitter<any>;

    constructor() {
        this.availableTabs = new EventEmitter<any>();
    }

    getTabs() {
        this.availableTabs.emit();
    }
   
}
