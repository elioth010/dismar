import { EffectsModule } from '@ngrx/effects';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Components
import { AppComponent } from './app.component';
// Routes
import { routes } from './app.routes';
// Modules
import { SharedModule } from './shared/index';
import { UserModule } from './user/index';
import { HomeModule } from './home/index';
import { LayoutModule } from './layout/index';
import { CoreModule } from './core/index';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app.reducers';
import { CheckoutHeaderComponent } from './layout/checkout-header/checkout-header.component';
import { CheckoutFooterComponent } from './layout/checkout-footer/checkout-footer.component';

// adding rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';
import { AboutComponent } from './home/content/about/about.component';
import { WelcomeComponent } from './home/content/welcome/welcome.component';
import {FragmentPolyfillModule} from "./fragment-polyfill";
import { ContactComponent } from './home/content/contact/contact.component';
import {ProductComponent} from "./product/product.component";

// Services
import { NavigationServiceService } from './shared/services/navigation-service.service';
import { ProductsComponent } from './home/content/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutHeaderComponent,
    CheckoutFooterComponent,
    AboutComponent,
    WelcomeComponent,
    ProductComponent,
    ContactComponent,
    ProductsComponent
  ],
  imports: [
    FragmentPolyfillModule.forRoot({
      smooth: true
    }),
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),

    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LayoutModule,
    CoreModule,
    SharedModule,
  ],
  providers: [NavigationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
