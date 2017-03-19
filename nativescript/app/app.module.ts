import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular";
import { routes } from './app.routes';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';

import { AppComponent } from "./components/app.component";
import { RunaComponent } from './components/runa/runa.component';
import { NumberComponent } from './components/number/number.component';
import { TextComponent } from './components/text/text.component';

@NgModule({
    declarations: [
        AppComponent,
        RunaComponent,
        NumberComponent,
        TextComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
