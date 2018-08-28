import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';
import {promise} from "selenium-webdriver";
import fulfilled = promise.fulfilled;

import {WelcomeComponent} from "./home/content/welcome/welcome.component";
import {AboutComponent} from './home/content/about/about.component';
import {ContactComponent} from "./home/content/contact/contact.component";
import {ProductsComponent} from "./home/content/products/products.component";


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
    component: ProductsComponent
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
