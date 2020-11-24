import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  userAddressValidations: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.userAddressValidations = this.fb.group({
      mobile: ['', Validators.compose([Validators.pattern(
      '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
        )])]
    });

  }

}
