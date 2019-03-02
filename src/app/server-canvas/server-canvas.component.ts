import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-canvas',
  templateUrl: './server-canvas.component.html',
  styleUrls: ['./server-canvas.component.less']
})
export class ServerCanvasComponent implements OnInit {
  servers: number[];
  constructor() { }

  ngOnInit() {
    this.servers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  }
}
