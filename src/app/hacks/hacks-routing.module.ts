import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstHacksComponent} from './first-hacks/first-hacks.component';

const routes: Routes = [
  {path: '', component: FirstHacksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HacksRoutingModule { }
