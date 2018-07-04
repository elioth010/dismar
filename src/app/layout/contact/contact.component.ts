import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationServiceService} from '../../shared/services/navigation-service.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  subscription;
  nameClass;
  contactForm: FormGroup;

  constructor(
    private navigationService: NavigationServiceService,
    private fb: FormBuilder,
    title: Title
  ) {
    this.subscription = navigationService.notify.subscribe(value => this.changeClass(value));
    title.setTitle('Formulario Contacto');
    this.buildForm();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      subject: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.maxLength(8)])]
    });
  }

  onSubmit() {
    const name = this.contactForm.get('name').value;
    console.log(name)
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

}
