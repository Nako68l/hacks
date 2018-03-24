import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HacksRoutingModule} from './hacks-routing.module';
import {FirstHacksComponent} from './first-hacks/first-hacks.component';

@NgModule({
  imports: [
    CommonModule,
    HacksRoutingModule
  ],
  declarations: [FirstHacksComponent],
  exports: [FirstHacksComponent]
})
export class HacksModule {
}
