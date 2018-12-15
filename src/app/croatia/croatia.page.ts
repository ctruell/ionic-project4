import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'app-croatia',
  templateUrl: './croatia.page.html',
  styleUrls: ['./croatia.page.scss'],
})
export class CroatiaPage implements OnInit {

  constructor() {
    //var geo: Geolocation;
    //var map;
  }

  ngOnInit() {
  }

  /*initMap() {
    var lat = 45.1000;
    var lng = 15.2000;
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: {lat, lng}});
    var marker = new google.maps.Marker({position: {lat, lng}, map: map});
    var geo: Geolocation;

    let mapOptions = {
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
 
    geo.getCurrentPosition().then(pos => {
      let latLng = new google.maps.LatLng(lat, lng);
      map.setCenter(latLng);
      map.setZoom(4);
    }
    )}*/
}
