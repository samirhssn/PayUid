
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { ForgetpasswordPageForm } from './forget-password.page.form';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  
  form: FormGroup;
 

  constructor(private router:Router ,private formBulider: FormBuilder) { }

 
  ngOnInit() {
    this.form = new ForgetpasswordPageForm(this.formBulider).createForm();
    
  }
  
  login(){
    this.router.navigate(['login'])
  }
  

}

