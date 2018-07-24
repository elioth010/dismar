import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {getTaxonomies} from '../../../product/reducers/selectors';
import {AppState} from '../../../interfaces';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AuthActions} from '../../../auth/actions/auth.actions';
import {AuthService} from '../../../core/services/auth.service';
import {SearchActions} from '../../reducers/search.actions';

import { taxonomiList } from './shared/taxonomi-list';
import {NavigationServiceService} from "../../../shared/services/navigation-service.service";

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent implements OnInit{
  @Output() navigate = new EventEmitter<number>();
  taxonomies$: Observable<any>;
  taxonList = taxonomiList;

  private isSelected = 1;
  private navState = {
    navOld: 0,
    navCurrent: 1
  }

  constructor(private store: Store<AppState>,
              private authService: AuthService,
              private authActions: AuthActions,
              private searchActions: SearchActions,
              private router: Router,
              private navigationService: NavigationServiceService) {
    this.taxonomies$ = this.store.select(getTaxonomies);
  }

  ngOnInit() {
  }

/*
  selectTaxon(taxon) {
    this.router.navigateByUrl('/');
    this.store.dispatch(this.searchActions.addFilter(taxon));
  }
*/

  activeIndicator(element) {
    this.isSelected = element.id;

    element.taxons = [this.navState];

    if (this.navState.navOld === 0 && this.navState.navCurrent === 0) {
      this.navState.navCurrent = element.id;
    }

    if (this.navState.navCurrent !== 0) {
      this.navState.navOld = this.navState.navCurrent;
      this.navState.navCurrent = element.id;
    }

    this.navigationService.notify.next(element);
  }

  navigatePosition(scroll) {
    this.navigate.emit(scroll);
  }
}
