import { Component, OnInit } from '@angular/core';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  base64:string='data:image/png;base64,';

  constructor(private preview:CameraPreview) {}

  ngOnInit(){
    this.openCamere();
  }

  openCamere(){
    this.preview.startCamera({}).then((val)=>{
      alert(val);
      this.preview.takePicture().then((base65)=>{
        console.log('only base 64', base65);
        this.base64 = this.base64 + base65;
        console.log('base url->', this.base64);
        this.preview.stopCamera();
      })

    },(err)=>{
      alert(JSON.stringify(err));

    });
  }

}
