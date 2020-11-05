import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  minDate:string = new Date().toISOString();
  maxDate: any = (new Date()).getFullYear()+3;
  

  constructor() {}

}
