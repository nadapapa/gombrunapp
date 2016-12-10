import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunaComponent } from './runa/runa.component';

const routes: Routes = [
  {
    path: '',
    component: RunaComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
