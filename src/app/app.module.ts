import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import { NotifyComponent } from './components/notify/notify.component';
import { PolicejobComponent } from './components/policejob/policejob.component';
import { GarageComponent } from './components/policejob/garage/garage.component';
import { PoliceVehicleComponent } from './components/policejob/garage/police-vehicle/police-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    PolicejobComponent,
    GarageComponent,
    PoliceVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
