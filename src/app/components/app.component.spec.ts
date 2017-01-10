/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RunaComponent } from './runa/runa.component';
import { NumberComponent } from './number/number.component';
import { TextComponent } from './text/text.component';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

let routerModule = RouterModule.forRoot(routes);

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RunaComponent,
        NumberComponent,
        TextComponent
      ],
      imports: [ routerModule ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
