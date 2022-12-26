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
import { ArmurerieComponent } from './components/policejob/armurerie/armurerie.component';
import { WeaponArmurerieComponent } from './components/policejob/armurerie/weapon-armurerie/weapon-armurerie.component';

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    PolicejobComponent,
    GarageComponent,
    PoliceVehicleComponent,
    ArmurerieComponent,
    WeaponArmurerieComponent
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
