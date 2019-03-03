import { Component, OnInit, Input } from '@angular/core';
import { App } from '../state/menu.reducer';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.less']
})
export class AppItemComponent implements OnInit {

  constructor() { }
  @Input() app: App;

  ngOnInit() {
  }

}
