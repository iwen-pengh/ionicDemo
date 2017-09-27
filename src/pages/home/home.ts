import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    images: Array<{ src: String }>;
    // 接收数据用
    listData: Object;
    constructor(public navCtrl: NavController,
                private camera: Camera,
                private http: Http
    ) {
        this.images = []
    }

    ionViewDidLoad() {
        console.log(this.images);
        this.http.request('http://jsonplaceholder.typicode.com/users')
            .subscribe((res: Response) => {
                this.listData = res.json();
                console.log(this.listData);
            });
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
            this.images.unshift({
                src: base64Image
            })


        }, (err) => {
            console.log('获取图片失败');
        });

    }


}