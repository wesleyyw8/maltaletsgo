import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerCanvasComponent } from './server-canvas/server-canvas.component';
import { MenuComponent } from './menu/menu.component';
import { ServerComponent } from './server-canvas/server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerCanvasComponent,
    MenuComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
