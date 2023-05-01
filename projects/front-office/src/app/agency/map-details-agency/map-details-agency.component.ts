import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgencyBranch } from 'Models/AgencyBranch';

@Component({
  selector: 'app-map-details-agency',
  templateUrl: './map-details-agency.component.html',
  styleUrls: ['./map-details-agency.component.scss']
})
export class MapDetailsAgencyComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
