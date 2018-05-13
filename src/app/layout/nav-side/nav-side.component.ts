import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {getTaxonomies} from '../../product/reducers/selectors';
import {AppState} from '../../interfaces';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AuthActions} from '../../auth/actions/auth.actions';
import {AuthService} from '../../core/services/auth.service';
import {SearchActions} from '../../home/reducers/search.actions';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent implements OnInit {
  taxonomies$: Observable<any>;
  taxonList = [{
    'id': 4,
    'name': 'Inicio',
    'pretty_name': 'Categories -> Product',
    'permalink': 'categories/product',
    'parent_id': 1,
    'taxonomy_id': 1,
    'taxons': null
  },
    {
      'id': 3,
      'name': 'Nosotros',
      'pretty_name': 'Categories -> Brand',
      'permalink': 'categories/brand',
      'parent_id': 1,
      'taxonomy_id': 1,
      'taxons': null
    }, {
      'id': 8,
      'name': 'productos',
      'pretty_name': 'Contact',
      'permalink': 'contact',
      'taxonomy_id': 1,
      'taxons': null
    },{
      'id': 10,
      'name': 'Contacto',
      'pretty_name': 'Contact',
      'permalink': 'contact',
      'taxonomy_id': 1,
      'taxons': null
    }];

  constructor(private store: Store<AppState>,
              private authService: AuthService,
              private authActions: AuthActions,
              private searchActions: SearchActions,
              private router: Router) {
    this.taxonomies$ = this.store.select(getTaxonomies);
  }

  ngOnInit() {
  }

  selectTaxon(taxon) {
    this.router.navigateByUrl('/');
    this.store.dispatch(this.searchActions.addFilter(taxon));
  }
}
