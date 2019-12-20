import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emergency-enrichment';
  reportIDs = [];
  selectedReportID = null;

  constructor(private apiService: ApiService){
    apiService.getReportNames().subscribe((res)=>{
      this.reportIDs = res['data'];
      this.selectedReportID = this.reportIDs[0];
    });
  }

  public getReport(): void {
    this.apiService.getReport(this.selectedReportID).subscribe((res)=>{
      console.log(res['data']);
    })
  }
}
