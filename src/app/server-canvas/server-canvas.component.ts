import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromServers from './state/server-canvas.reducer';

@Component({
  selector: 'app-server-canvas',
  templateUrl: './server-canvas.component.html',
  styleUrls: ['./server-canvas.component.less']
})
export class ServerCanvasComponent implements OnInit {
  servers: [];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select(fromServers.getServers)).subscribe(
      apps => this.servers = apps
    );
  }
}
