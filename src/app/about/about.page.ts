import { Component } from '@angular/core';
//import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  version() {
    var appVersion = "1.0.0";
    document.getElementById("ver").innerHTML = appVersion;

    /*cordova.getAppVersion.getVersionNumber(function (version) {
      alert(version);
    });*/
  }
}
