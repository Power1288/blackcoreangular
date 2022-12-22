import { Injectable } from '@angular/core';
import {Vehicle} from "../interfaces/police/vehicle";

@Injectable({
  providedIn: 'root'
})
export class PolicejobService {
  get vehicles(): Vehicle[] {
    return this._vehicles;
  }

  set vehicles(value: Vehicle[]) {
    this._vehicles = value;
  }


  private _visible : boolean = false;
  private _garage : boolean = false;

  private _vehicles : Vehicle[] = []

  get garage(): boolean {
    return this._garage;
  }

  set garage(value: boolean) {
    this._garage = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }

  constructor() { }

  resetUi() {
    this.garage = false
    this.visible = false
  }

}
