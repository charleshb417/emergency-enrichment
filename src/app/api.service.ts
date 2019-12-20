import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiRoot = '/api';

  constructor(private httpClient: HttpClient) { }

  public getReportNames() {
    return this.httpClient.get(`${this.apiRoot}/reports/`);
  }

  public getReport(reportID: String) {
    return this.httpClient.get(`${this.apiRoot}/reports/${reportID}`);
  }
}
