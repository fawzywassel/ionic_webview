import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormsModule } from '@angular/forms';
import { Autostart } from '@ionic-native/autostart/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    InAppBrowser,
    NativeStorage,
    AndroidFullScreen,
    StatusBar,
    Autostart,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
