import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular";
import { routes } from './app.routes';

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
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
