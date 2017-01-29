import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_REQUESTED, State } from '../authentication/state/reducers/auth-reducer';
import { DataService } from './../../services/data.service';
import { Observable } from 'rxjs';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

title: 'test';

 lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 5;
  markers: Observable<any>;

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.markers = this.dataService.getVehicleData();
    console.log(this.markers);

    var directionsService = new google.maps.DirectionsService;
       var directionsDisplay = new google.maps.DirectionsRenderer;
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);
        calculateAndDisplayRoute(directionsService, directionsDisplay);

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {

          var waypts = [];
          var checkboxArray:any[] = [
              'winnipeg', 'regina','calgary'
      ];
      for (var i = 0; i < checkboxArray.length; i++) {

            waypts.push({
              location: checkboxArray[i],
              stopover: true
            });

        }

        directionsService.route({
          origin: {lat: 41.85, lng: -87.65},
          destination: {lat: 49.3, lng: -123.12},
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }


  }


}
