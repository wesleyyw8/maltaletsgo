import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  apps: number[];
  constructor() { }

  ngOnInit() {
    this.apps = [1,1,1,1,11,1,1,1];
  }

}
