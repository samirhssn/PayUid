import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '@capacitor/app';
import { IonicModule, NavController, ToastController } from '@ionic/angular';

import { AppRoutingModule } from 'src/app/app-routing.module';



import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
 
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
       
        
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
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

  it('should go to login page on sign', () => {
    spyOn(router, 'navigate');

    component.signup();

    expect(router.navigate).toHaveBeenCalledWith(['signup']);
  }

  )})
