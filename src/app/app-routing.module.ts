import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./common_module/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./common_module/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./common_module/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'userpage',
    loadChildren: () => import('./user_module/userpage/userpage.module').then( m => m.UserpagePageModule)
  },
  {
    path: 'makepayment',
    loadChildren: () => import('./user_module/userpage/makepayment/makepayment.module').then( m => m.MakepaymentPageModule)
  },
  {
    path: 'receivepayment',
    loadChildren: () => import('./user_module/userpage/receivepayment/receivepayment.module').then( m => m.ReceivepaymentPageModule)
  },
  {
    path: 'billpay',
    loadChildren: () => import('./user_module/userpage/billpay/billpay.module').then( m => m.BillpayPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./user_module/userpage/cards/cards.module').then( m => m.CardsPageModule)
  },
  
  {
    path: 'personalaccount',
    loadChildren: () => import('./user_module/userpage/receivepayment/personalaccount/personalaccount.module').then( m => m.PersonalaccountPageModule)
  },
  {
    path: 'addaccount',
    loadChildren: () => import('./user_module/userpage/makepayment/addaccount/addaccount.module').then( m => m.AddaccountPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./user_module/userpage/qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
