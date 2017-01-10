import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './components/app.component';
import { RunaComponent } from './components/runa/runa.component';
import { NumberComponent } from './components/number/number.component';
import { TextComponent } from './components/text/text.component';

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
