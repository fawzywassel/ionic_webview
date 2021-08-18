import { Component, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  serviceIP: string;
  submitted: boolean;
  showForm = true;
  urlSafe: SafeResourceUrl;
  @ViewChild('ipForm') form;

  constructor(platform: Platform, public sanitizer: DomSanitizer, private storage: NativeStorage, private iab: InAppBrowser) {

    platform.ready().then(() => {
      storage.getItem('serviceIP').then((ip) => {
        if (ip) {
          this.showForm = false;
          // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(`http://${ip}`);

          const browser = this.iab.create(this.serviceIP, '_blank', 'location=no,clearcache=yes,hardwareback=no,hidenavigationbuttons=yes,hideurlbar=yes,fullscreen=yes');
          browser.on('loaderror').subscribe(event => {
            this.showForm = true;
          });
        } else {
          this.showForm = true;
        }

      });
    });

  }


  save() {
    this.submitted = true;


    if (this.serviceIP !== '') {
      this.showForm = false;
      this.storage.setItem('serviceIP', this.serviceIP);
      //this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(`http://${this.serviceIP}`);
      const browser = this.iab.create(this.serviceIP, '_blank', 'location=no,clearcache=yes,hardwareback=no,hidenavigationbuttons=yes,hideurlbar=yes,fullscreen=yes');
      browser.on('loaderror').subscribe(event => {
        this.showForm = true;
      });
    }
  }

}
