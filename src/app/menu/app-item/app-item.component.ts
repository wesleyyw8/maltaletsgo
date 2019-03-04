import { Component, OnInit, Input } from '@angular/core';
import { App } from '../state/menu.reducer';
import { Store } from '@ngrx/store';
import * as serverCanvasActions from './../../server-canvas/state/server-canvas.actions';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.less']
})
export class AppItemComponent implements OnInit {

  constructor(private store: Store<any>) { }
  @Input() app: App;
  ngOnInit() {
  }
  addApp(app: App): void {
    this.store.dispatch(new serverCanvasActions.AddApp(app));
  }
  removeApp(appName: string): void {
    this.store.dispatch(new serverCanvasActions.RemoveApp(appName));
  }
}
