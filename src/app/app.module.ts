import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActuatorService, BASE_PATH } from 'rps-client';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
    ActuatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
