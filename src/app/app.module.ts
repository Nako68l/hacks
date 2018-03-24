import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {FirstHacksComponent} from './hacks/first-hacks/first-hacks.component';
import {HacksModule} from './hacks/hacks.module';

const appRoutes: Routes = [
  {path: '', component: FirstHacksComponent},
  { path: '**', redirectTo: '/404' },
  { path: '404', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HacksModule,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
