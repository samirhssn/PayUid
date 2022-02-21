import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupPageForm } from './signup.page.form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  signupForm: SignupPageForm;
  showPassword=false;
  passwordToggleIcon ="eye";
  

  constructor(private router:Router,private formBuilder: FormBuilder) { }
  togglePassword():void{
    this.showPassword=!this.showPassword;

    
  }

  ngOnInit() {
    this.createForm();
  }
  signup(){
    this.signupForm.getForm().markAllAsTouched();
    if(this.signupForm.getForm().valid){
    this.router.navigate(['userpage'])
  }
  }
  private createForm(){
    this.signupForm=new SignupPageForm(this.formBuilder)
  }

}
