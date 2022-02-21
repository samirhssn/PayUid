import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AddaccountPageForm } from './form/addaccount.page.form';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.page.html',
  styleUrls: ['./addaccount.page.scss'],
})
export class AddaccountPage implements OnInit {
  addaccountForm : AddaccountPageForm;

  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  addaccount(){
    this.addaccountForm.getForm().markAllAsTouched();
    if(this.addaccountForm.getForm().valid){
    this.router.navigate(['makepayment'])
  }
  }
  private createForm(){
    this.addaccountForm=new AddaccountPageForm(this.formBuilder)
  }

}
