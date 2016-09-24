import { Component } from '@angular/core';

@Component({
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.css']
})
export class FullComponent {
    singleModel:string = '1';
    radioModel:string = 'Middle';
    checkModel:any = {left: false, middle: true, right: false};
}
