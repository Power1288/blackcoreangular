import {Component, Input} from '@angular/core';
import {Vehicle} from "../../../../interfaces/police/vehicle";
import {HttpClient} from "@angular/common/http";
import {PolicejobService} from "../../../../services/policejob.service";

@Component({
  selector: 'app-police-vehicle',
  templateUrl: './police-vehicle.component.html',
  styleUrls: ['./police-vehicle.component.scss']
})
export class PoliceVehicleComponent {
  @Input() vehicle: Vehicle | undefined;

  constructor(private http : HttpClient,private policeJobService : PolicejobService) {
  }

  handleLeaveVehicle() {
    this.http.post<Vehicle>("https://blackcore/policeJob_LeaveVehicle",{
      vehicle : this.vehicle
    }).subscribe({
      next:(data) => {
        if (data) this.policeJobService.resetUi()
      },
      error:(err) => {
        console.log(err)
      }
    })
  }
}
