import { Component } from '@angular/core';
import {PolicejobService} from "../../../services/policejob.service";

@Component({
  selector: 'app-police-armurerie',
  templateUrl: './armurerie.component.html',
  styleUrls: ['./armurerie.component.scss']
})
export class ArmurerieComponent {
  constructor(public policeJobService : PolicejobService) {
  }
}
