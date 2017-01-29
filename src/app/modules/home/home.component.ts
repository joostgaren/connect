import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_REQUESTED, State } from '../authentication/state/reducers/auth-reducer';
import { DataService } from './../../services/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: 'test';
  private chartData: Array<any>;

  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 5;
  markers: Observable<any>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

 this.markers = this.dataService.getVehicleData();
console.log(this.markers);

      this.generateData();


  }

  generateData() {
    this.chartData = [2, 5, 4];
  }

  test(event) {
//    this.chartConfig = { settings: { fill: 'rgba(195, 0, 47, 2)', interpolation: null }, dataset: null };
  }




}
