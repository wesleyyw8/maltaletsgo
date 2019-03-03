import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.less']
})
export class ServerComponent implements OnInit {

  constructor() { }
  @Input() server;

  ngOnInit() {
    console.log(this.server);
  }

}
