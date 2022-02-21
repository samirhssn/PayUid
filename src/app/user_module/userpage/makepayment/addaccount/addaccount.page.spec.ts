import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddaccountPageModule } from './addaccount.module';

import { AddaccountPage } from './addaccount.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('SignupPage', () => {
  let component: AddaccountPage;
  let fixture: ComponentFixture<AddaccountPage>;
  let page;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccountPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        AddaccountPageModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddaccountPage);
    router=TestBed.get(Router);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    
  }));

  it('should create  add account form on page init', () => {
    fixture.detectChanges();

    expect(component.addaccountForm).not.toBeTruthy();
  })
  it('should go to makepayment on addaccount', () => {
    fixture.detectChanges();
    spyOn(router,'navigate');

    component.addaccountForm.getForm().get('firstname').setValue("anyFirstName");
    component.addaccountForm.getForm().get('lastname').setValue("anyLastName");
    component.addaccountForm.getForm().get('accountnumber').setValue("anyAccountnumber");
    component.addaccountForm.getForm().get('conformaccoutnnumber').setValue("anyAccountnumber");
    component.addaccountForm.getForm().get('IFSCcode').setValue("anyIFSCcode");
    component.addaccountForm.getForm().get('bankname').setValue("anyBankname");
    component.addaccountForm.getForm().get('branchname').setValue("anyBranchname")
    component.addaccountForm.getForm().get('address').setValue("any address");
    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledWith(['makepayment']);
    
  })
  it('should not be allowed to save with component.addaccountForm.getForm(). invaild', () => {
    fixture.detectChanges();
    spyOn(router,'navigate');
    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledWith(['userpage']);
    
  })
  

});


