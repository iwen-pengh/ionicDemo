import { Component, ViewChild } from '@angular/core';
import { Platform, Tabs } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';
import { BackButtonService } from "../../services/backButton.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SettingPage;
    tabRoots: Object[];
  @ViewChild('myTabs') tabRef: Tabs;

    constructor(public backButtonService: BackButtonService,
                private platform: Platform) {
console.log(this.platform);
        this.platform.ready().then(() => {
            this.backButtonService.registerBackButtonAction(this.tabRef);
        });
    }


}
