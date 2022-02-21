import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SignupPageModule } from './signup.module';

import { SignupPage } from './signup.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;
  let page;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        SignupPageModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPage);
    router=TestBed.get(Router);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    
  }));

  it('should create signup form on page init', () => {
    fixture.detectChanges();

    expect(component.signupForm).not.toBeTruthy();
  })
  it('should go to userpage on signup', () => {
    fixture.detectChanges();
    spyOn(router,'navigate');

    component.signupForm.getForm().get('name').setValue("anyName");
    component.signupForm.getForm().get('email').setValue("any@email.com");
    component.signupForm.getForm().get('password').setValue("anyPassword");
    component.signupForm.getForm().get('repeatPassword').setValue("anyPassword");
    component.signupForm.getForm().get('phone').setValue("anyPhone")
    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
    
  })
  it('should not be allowed to register with component.registerForm.getForm(). invaild', () => {
    fixture.detectChanges();
    spyOn(router,'navigate');
    page.querySelector('ion-button').click();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
    
  })

});


