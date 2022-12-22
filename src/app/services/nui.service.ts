import { Injectable } from '@angular/core';
import {PolicejobService} from "./policejob.service";

@Injectable({
  providedIn: 'root'
})
export class NuiService {


  constructor(private policeJobService : PolicejobService) { }

}
