import {getAuthStatus} from './auth/reducers/selectors';
import {AppState} from './interfaces';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {CheckoutService} from './core/services/checkout.service';
import {Component, OnInit, OnDestroy, ElementRef, ViewChild, Input} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

import {taxonomiList} from './layout/nav-side/shared/taxonomi-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('mainContent') mainContent: ElementRef;

  orderSub$: Subscription;
  currentUrl: string;
  currentStep: string;
  checkoutUrls = ['/checkout/cart', '/checkout/address', '/checkout/payment'];

  listTaxonomi = taxonomiList;

  countPosition = 0;

  private vp = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  constructor(private router: Router,
              private checkoutService: CheckoutService,
              private store: Store<AppState>) {
    router
      .events
      .filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => {
        this.currentUrl = e.url;
        this.findCurrentStep(this.currentUrl);
        window.scrollTo(0, 0);
      });
  }

  ngOnInit() {
    this.store.select(getAuthStatus).subscribe(() => {
      this.orderSub$ = this.checkoutService.fetchCurrentOrder()
        .subscribe();
    });
    console.log(this.mainContent.nativeElement)
  }

  isCheckoutRoute() {
    if (!this.currentUrl) {
      return false;
    }
    const index = this.checkoutUrls.indexOf(this.currentUrl);
    if (index >= 0) {
      return true;
    } else {
      return false;
    }
  }

  private findCurrentStep(currentRoute) {
    const currRouteFragments = currentRoute.split('/');
    const length = currRouteFragments.length;
    this.currentStep = currentRoute.split('/')[length - 1];
  }

  ngOnDestroy() {
    this.orderSub$.unsubscribe();
  }

  navigateTo(position) {
    if (position === 0) {
      for (let i = position; i >= 0; i--) {
        setTimeout(() => {
          window.scrollTo(0, this.countPosition);
          this.countPosition += position[i];
        }, this.countPosition)
      }
    } else {
      for (let i = 0; i < position; i++) {
        setTimeout(() => {
          window.scrollTo(0, this.countPosition);
          this.countPosition++;
        }, this.countPosition)
      }
    }
    console.log(this.countPosition)
  }
}
