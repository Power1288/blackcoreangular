import {Component, OnInit} from '@angular/core';
import {NuiService} from "./services/nui.service";
import {PolicejobService} from "./services/policejob.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angularui';
  constructor(public nuiService : NuiService, public policeJobservice : PolicejobService)  {

  }

  ngOnInit(): void {
    window.addEventListener("message",(event : MessageEvent) => {
      const data = event.data
      switch (data.ui) {
        case "policeJob":
          if (data.uiType == "garage") {
            this.policeJobservice.visible = true
            this.policeJobservice.garage = true
            this.policeJobservice.vehicles = data.vehicles
          }
          break
        default:
          break
      }
    })
  }

}
