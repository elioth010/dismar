import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';
import {WelcomeComponent} from "./layout/welcome/welcome.component";
import {promise} from "selenium-webdriver";
import fulfilled = promise.fulfilled;


export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule' },
  {
    path: 'user',
    loadChildren: './user/index#UserModule',
    canActivate: [ CanActivateViaAuthGuard ]
  },
  {
    path: 'product',
    loadChildren: './product/index#ProductModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];
