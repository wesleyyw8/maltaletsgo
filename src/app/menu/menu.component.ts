import { Component, OnInit, Input } from '@angular/core';
import * as fromApps from './state/menu.reducer';
import { select, Store } from '@ngrx/store';

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

}
