import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emergency-enrichment';
  reportIDs = [];
  selectedReportID: string = null;

  // Richmond can be the default
  currLat: number = 37.54;
  currLong: number = -77.436;
  currZoom: number = 10;

  constructor(private apiService: ApiService){
  }

  ngOnInit() {
    this.apiService.getReportNames().subscribe((res)=>{
      this.reportIDs = res['data'];
      this.selectedReportID = this.reportIDs[0];

      this.getReport(); //initialize the map
    });
  }

  public getReport(): void {
    this.apiService.getReport(this.selectedReportID).subscribe((res)=>{
      let datum = res['data'];

      // Set Map Coordinates
      this.currLat = datum['address']['latitude'];
      this.currLong = datum['address']['longitude'];
      this.currZoom = 15;
    })
  }
}
