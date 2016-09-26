import { Component } from '@angular/core';

@Component({
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent {
  theme:string = 'skin-blue-light';
  collapsed:boolean = false;
  opened:boolean = false;

  changeTheme(theme:string) {
    this.theme = 'skin-' + theme;
  }

  collapse(e:boolean) {
    let width = window.innerWidth;
    if (width < 768) {
      this.opened = e;
    } else {
      this.collapsed = e;
    }
  }

  setTheme() {
    return this.theme;
  }
}
