import {Component, Input, OnInit} from '@angular/core';
import {Weapon} from "../../../../interfaces/police/weapon";

@Component({
  selector: 'app-weapon-armurerie',
  templateUrl: './weapon-armurerie.component.html',
  styleUrls: ['./weapon-armurerie.component.scss']
})
export class WeaponArmurerieComponent implements OnInit{
  @Input() weapon : Weapon | undefined
  imgUrl: string |undefined
  ngOnInit() {
    this.imgUrl = "./assets/policejob/"+this.weapon?.model+".png";
  }


}
