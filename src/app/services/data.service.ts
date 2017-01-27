import { environment } from './../../environments/environment';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class DataService {

  private header;
//  private backend: string = 'api/mobility-platform';
  private backend: string = environment.backend;

  constructor(private http: Http) {

    this.header = new Headers();
    this.header.append('Accept', 'application/json');
    this.header.append('Content-Type', 'application/json');
    this.header.append("Authorization", "Basic " + btoa('cv-test250@mailinator.com' + ":" + 'Test123456'));

  }

  getVehicleData() {

    let alertData = this.http.get(this.backend + "/partner/alerts/active", { headers: this.header });

    let vehicleData = this.http.get(this.backend + '/partner/vehicles', { headers: this.header });

    return Observable.zip(vehicleData, alertData)
      .map(resp => this.combineVehicleAndAlerts(resp))

  }

  combineVehicleAndAlerts(resp) {
    let vehicleData = resp[0].json();
    let alertData = resp[1].json();

    for (let vehicle of vehicleData) {
      let vehicleAlerts = [];
      for (let alert of alertData) {
        if (alert.vin === vehicle.vehicle.vin) {
          vehicleAlerts.push(alert);
        }
      }
      vehicle['alerts'] = vehicleAlerts;
    }

    return vehicleData;
  }

  getVehicleAlerts(vin: string) {
    return this.http.get(this.backend + '/vehicle/' + vin + '/alerts/active', { headers: this.header })
      .map(response => response.json());
  }

  getDrivers() {
    return this.http.get(this.backend + '/partner/drivers', { headers: this.header })
      .map(response => response.json());
  }

  getVehicle(vin: string) {
    return this.http.get(this.backend + '/vehicle/' + vin, { headers: this.header })
      .map(response => response.json());
  }

  getVehiclePrCodes(vin: string) {
    return this.http.get(this.backend + '/vehicle/' + vin, { headers: this.header })
      .map(response => response.json())
      .map(json => json.vehicle.prCodes);
  }

  getVehicleImage(url: string) {
    this.header = new Headers();
    this.header.append('Content-Type', 'application/x-www-form-urlencoded');
    //    this.header.append('responseType', ResponseContentType.Blob);
    this.header.append("Authorization", "Basic " + btoa('testcv@mailinator.com' + ":" + 'Test123456!'));
    return this.http.get(this.backend + url, { 'responseType': ResponseContentType.Blob, headers: this.header })
      .map(response => {
        //new Blob([response.blob()], {type: 'application/png'}) 
        //response.blob()
        let blob = response.blob();
        let urlCreator = window.URL;
        let url = urlCreator.createObjectURL(blob);
        return url;
      }
      );
  }

}
