import { Component } from '@angular/core';
import {PolicejobService} from "../../../services/policejob.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-police-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent {


  constructor(public policeJobService: PolicejobService,private http: HttpClient) {
  }


  handleClose() {

    this.http.post("https://blackcore/policeJob_closeUi",{}).subscribe({
      next:() => {
        this.policeJobService.resetUi()
      }
    })

  }
}
