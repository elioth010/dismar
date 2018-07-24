import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NavigationServiceService} from '../../../shared/services/navigation-service.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit, OnDestroy {
  @Output() navigate = new EventEmitter<number>();

  subscription;
  nameClass = 'fadeIn';

  constructor(private navigationService: NavigationServiceService) {
    this.subscription = navigationService.notify.subscribe(value => this.changeClass(value));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeClass(taxon) {
    if (taxon) {
      taxon.taxons.forEach(item => {
        if (item.navOld > item.navCurrent) {
          this.nameClass = 'fadeInTop';
        } else if (item.navOld < item.navCurrent) {
          this.nameClass = 'fadeInBottom';
        }
      });
    }
  }

  navigatePosition(position) {
    this.navigate.emit(position);
  }

}
