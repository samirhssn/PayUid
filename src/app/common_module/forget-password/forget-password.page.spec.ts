import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '@capacitor/app';
import { IonicModule, NavController, ToastController } from '@ionic/angular';

import { AppRoutingModule } from 'src/app/app-routing.module';



import { ForgetPasswordPage } from './forget-password.page';

describe('LoginPage', () => {
  let component: ForgetPasswordPage;
  let fixture: ComponentFixture<ForgetPasswordPage>;
  let router: Router;
 
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
       
        
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordPage);
    router = TestBed.get(Router);
  
    

    component = fixture.componentInstance;
    
  }));

  it('should create form on init', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  })
  it('should go to home page on login', () => {
    spyOn(router, 'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  })

  

})
