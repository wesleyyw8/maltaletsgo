import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerCanvasComponent } from './server-canvas/server-canvas.component';
import { MenuComponent } from './menu/menu.component';
import { ServerComponent } from './server-canvas/server/server.component';
import { AppItemComponent } from './menu/app-item/app-item.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer as menuReducer } from './menu/state/menu.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ServerCanvasComponent,
    MenuComponent,
    ServerComponent,
    AppItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      apps: menuReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'appwes Devtools',
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
