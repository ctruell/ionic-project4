import { Component } from '@angular/core';

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
