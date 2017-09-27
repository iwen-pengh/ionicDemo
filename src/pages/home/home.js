"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HomePage = (function () {
    function HomePage(navCtrl, camera, http) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.http = http;
        this.images = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.images);
        this.http.request('http://jsonplaceholder.typicode.com/users')
            .subscribe(function (res) {
            _this.listData = res.json();
            console.log(_this.listData);
        });
    };
    HomePage.prototype.cameraFun = function () {
        var _this = this;
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
            _this.images.unshift({
                src: base64Image
            });
        }, function (err) {
            console.log('获取图片失败');
        });
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
