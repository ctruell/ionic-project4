import { Component, OnInit } from '@angular/core';
//import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  //constructor(private splashScreen: SplashScreen) { }

  ngOnInit() {
    //this.splashScreen.show();
    //this.splashScreen.hide();
    
    //setTimeout(function() {this.splashScreen.hide();}, 2000);
  }
}
