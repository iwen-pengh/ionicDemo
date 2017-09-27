import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { BackButtonService } from "../../services/backButton.service";

import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private backButtonService: BackButtonService,
              private platform: Platform,
              private camera: Camera
  ) {
      this.platform.ready().then(() => {
          this.backButtonService.registerBackButtonAction(null);
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      // let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      // alert(userinfo);
      // this.navCtrl.push(TabsPage);

        let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
        alert(userinfo);
        let modal = this.modalCtrl.create(TabsPage);
        modal.present();
    }

  }

  cameraFun() {
      // 设置选项
      const options: CameraOptions = {
          quality: 100,
          sourceType: this.camera.PictureSourceType.CAMERA,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
      }

        // 获取图片
      this.camera.getPicture(options).then((imageData) => {
        // 获取成功
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          console.log(base64Image);


      }, (err) => {
          console.log('获取图片失败');
      });

  }


}
