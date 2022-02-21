import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { LoginPageForm } from './login.page.form';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  form: FormGroup;
  showPassword=false;
  passwordToggleIcon ="eye";

  constructor(private router:Router ,private formBulider: FormBuilder) { }

 
  togglePassword():void{
    this.showPassword=!this.showPassword;

    
  }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBulider).createForm();
    
  }
  
  login(){
    this.router.navigate(['userpage'])
  }
  signup(){
    this.router.navigate(['signup'])
  }

}
