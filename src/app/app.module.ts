import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { EstimativaComponent } from './estimativa/estimativa.component';
import { HeadersComponent } from './headers/headers.component';
import { HomeComponent } from './home/home.component';
import { CubService } from './estimativa/cub.service';
import { HttpModule } from '../../node_modules/@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EstimativaComponent,
    HeadersComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
