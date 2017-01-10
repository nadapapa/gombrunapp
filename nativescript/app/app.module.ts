import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular";
import { routes } from './app/app.routes';

import { AppComponent } from "./app/components/app.component";
import { RunaComponent } from './app/components/runa/runa.component';
import { NumberComponent } from './app/components/number/number.component';
import { TextComponent } from './app/components/text/text.component';

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
