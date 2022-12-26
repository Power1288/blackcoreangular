import { Injectable } from '@angular/core';
import {Vehicle} from "../interfaces/police/vehicle";
import {Weapon} from "../interfaces/police/weapon";

@Injectable({
  providedIn: 'root'
})
export class PolicejobService {



  private _weapons : Weapon[] = [
    {label:"tazer",model:"weapon_stungun"},
    {label:"tazer",model:"weapon_stungun"},
    {label:"tazer",model:"weapon_stungun"},
    {label:"tazer",model:"weapon_stungun"},
    {label:"tazer",model:"weapon_stungun"},
    {label:"tazer",model:"weapon_stungun"},
    {label:"tazer",model:"weapon_stungun"},
    {label:"tazer",model:"weapon_stungun"},
    {label:"tazer",model:"weapon_stungun"},
  ]


  private _visible : boolean = true;
  private _garage : boolean = false;

  private _armurerie : boolean = true;

  get armurerie(): boolean {
    return this._armurerie;
  }

  set armurerie(value: boolean) {
    this._armurerie = value;
  }

  private _vehicles : Vehicle[] = []

  get weapons(): Weapon[] {
    return this._weapons;
  }

  set weapons(value: Weapon[]) {
    this._weapons = value;
  }
  get vehicles(): Vehicle[] {
    return this._vehicles;
  }

  set vehicles(value: Vehicle[]) {
    this._vehicles = value;
  }

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
