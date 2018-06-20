import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';
import {promise} from "selenium-webdriver";
import fulfilled = promise.fulfilled;

import {WelcomeComponent} from "./layout/welcome/welcome.component";
import {AboutComponent} from './layout/about/about.component';
import {ProductComponent} from "./product/product.component";
import {ContactComponent} from "./layout/contact/contact.component";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: WelcomeComponent
  },
  {
    path: 'productos',
    component: ProductComponent
  },
  {
    path: "nosotros",
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
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
];
