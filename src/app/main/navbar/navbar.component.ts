import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  themes:string[];
  collapsed:boolean;
  @Output() changeTheme = new EventEmitter<string>();
  @Output() sidebarCollapse = new EventEmitter<boolean>();

  constructor() {
    this.themes = ['blue', 'blue-light', 'green', 'green-light', 'purple', 'purple-light', 'red', 'red-light', 'yellow', 'yellow-light'];
    this.collapsed = false;
  }

  setTheme() {
    let random = Math.floor(Math.random() * this.themes.length + 1) - 1;
    let theme =  this.themes[random];
    this.changeTheme.emit(theme);
  }
  
  collapse() {
    this.collapsed = !this.collapsed;
    this.sidebarCollapse.emit(this.collapsed);
  }
}