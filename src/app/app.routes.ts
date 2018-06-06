import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  {
    path: 'inicio',
    redirectTo: '#inicio',
    pathMatch: 'full'
  },
  {
    path: 'nosotros',
    redirectTo: '#nosotros',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './home/index#HomeModule'
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
  }
];
