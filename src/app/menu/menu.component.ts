import { Component, OnInit, Input } from '@angular/core';
import * as fromApps from './state/menu.reducer';
import * as fromServers from '../server-canvas/state/server-canvas.reducer';
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
  appsFromLastServer: any;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select(fromApps.getApps)).subscribe(
      apps => this.apps = apps
    );
    this.store.pipe(select(fromServers.getAppsLastServer)).subscribe(
      apps => this.appsFromLastServer = apps
    );
  }
  addServer(value: boolean): void {
    this.store.dispatch(new serverCanvasActions.AddServer());
  }
  removeServer(value: boolean): void {
    // put apps of this server in another server
    const appsFromLastServer = this.appsFromLastServer;
    this.store.dispatch(new serverCanvasActions.RemoveServer());
    for (let x = 0; x <= appsFromLastServer.length - 1; x++) {
      this.store.dispatch(new serverCanvasActions.AddApp(appsFromLastServer[x]));
    }


  }
}
