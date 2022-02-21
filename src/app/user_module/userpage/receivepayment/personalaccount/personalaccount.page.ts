import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalaccountPageForm } from './form/personalaccount.page.form';

@Component({
  selector: 'app-personalaccount',
  templateUrl: './personalaccount.page.html',
  styleUrls: ['./personalaccount.page.scss'],
})
export class PersonalaccountPage implements OnInit {
  personalaccountForm : PersonalaccountPageForm;

  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  personalaccount(){
    this.personalaccountForm.getForm().markAllAsTouched();
    if(this.personalaccountForm.getForm().valid){
    this.router.navigate(['receivepayment'])
  }
  }
  private createForm(){
    this.personalaccountForm=new PersonalaccountPageForm(this.formBuilder)
  }

}
