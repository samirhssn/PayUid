import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PersonalaccountPageModule } from './personalaccount.module';

import { PersonalaccountPage } from './personalaccount.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('SignupPage', () => {
  let component: PersonalaccountPage;
  let fixture: ComponentFixture<PersonalaccountPage>;
  let page;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalaccountPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        PersonalaccountPageModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalaccountPage);
    router=TestBed.get(Router);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    
  }));

  it('should create  add account form on page init', () => {
    fixture.detectChanges();

    expect(component.personalaccountForm).not.toBeTruthy();
  })
  it('should go to makepayment on addaccount', () => {
    fixture.detectChanges();
    spyOn(router,'navigate');

    component.personalaccountForm.getForm().get('firstname').setValue("anyFirstName");
    component.personalaccountForm.getForm().get('lastname').setValue("anyLastName");
    component.personalaccountForm.getForm().get('accountnumber').setValue("anyAccountnumber");
    component.personalaccountForm.getForm().get('conformaccoutnnumber').setValue("anyAccountnumber");
    component.personalaccountForm.getForm().get('IFSCcode').setValue("anyIFSCcode");
    component.personalaccountForm.getForm().get('bankname').setValue("anyBankname");
    component.personalaccountForm.getForm().get('branchname').setValue("anyBranchname")
    component.personalaccountForm.getForm().get('address').setValue("any address");
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


