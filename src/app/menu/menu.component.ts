import { Component, OnInit, Input } from '@angular/core';
import * as fromApps from './state/menu.reducer';
import { select, Store } from '@ngrx/store';
import * as serverCanvasActions from './../server-canvas/state/server-canvas.actions';
import { App } from './state/menu.reducer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  apps: number[];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select(fromApps.getApps)).subscribe(
      apps => this.apps = apps
    );
  }
  addServer(value: boolean): void {
    this.store.dispatch(new serverCanvasActions.AddServer());
  }
  removeServer(value: boolean): void {
    this.store.dispatch(new serverCanvasActions.RemoveServer());
  }
}
