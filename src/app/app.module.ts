import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { RunaComponent } from './runa/runa.component';
import { NumberComponent } from './number/number.component';
import { TextComponent } from './text/text.component';

let routerModule = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    RunaComponent,
    NumberComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
