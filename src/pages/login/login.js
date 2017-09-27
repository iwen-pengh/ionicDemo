"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var tabs_1 = require("../tabs/tabs");
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, modalCtrl, backButtonService, platform, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.backButtonService = backButtonService;
        this.platform = platform;
        this.camera = camera;
        this.platform.ready().then(function () {
            _this.backButtonService.registerBackButtonAction(null);
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logIn = function (username, password) {
        if (username.value.length == 0) {
            alert("请输入账号");
        }
        else if (password.value.length == 0) {
            alert("请输入密码");
        }
        else {
            // let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
            // alert(userinfo);
            // this.navCtrl.push(TabsPage);
            var userinfo = '用户名：' + username.value + '密码：' + password.value;
            alert(userinfo);
            var modal = this.modalCtrl.create(tabs_1.TabsPage);
            modal.present();
        }
    };
    LoginPage.prototype.cameraFun = function () {
        // 设置选项
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        // 获取图片
        this.camera.getPicture(options).then(function (imageData) {
            // 获取成功
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(base64Image);
        }, function (err) {
            console.log('获取图片失败');
        });
    };
    LoginPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
