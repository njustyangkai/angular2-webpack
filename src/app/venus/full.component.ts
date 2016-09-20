import { Component } from '@angular/core';

@Component({
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.css']
})
export class FullComponent {
    minHeight:string;

    constructor() {
        this.minHeight = window.innerHeight + 'px';
    }
}
