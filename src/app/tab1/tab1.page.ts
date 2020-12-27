import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public paneEnabled: boolean = false;

  constructor(private menuCtl: MenuController) {}

  ionViewWillEnter() {
    console.log('tab1.ionViewWillEnter()');
    this.paneEnabled = true;
    this.menuCtl.enable(true, 'first');
  }
  
  ionViewWillLeave() {
    console.log('tab1.ionViewWillEnter()');
    this.paneEnabled = false;
  }

}
