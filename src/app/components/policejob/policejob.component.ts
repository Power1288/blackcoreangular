import { Component } from '@angular/core';
import {PolicejobService} from "../../services/policejob.service";

@Component({
  selector: 'app-policejob',
  templateUrl: './policejob.component.html',
  styleUrls: ['./policejob.component.scss']
})
export class PolicejobComponent {

  constructor(public policeJobService : PolicejobService) {
  }
}
