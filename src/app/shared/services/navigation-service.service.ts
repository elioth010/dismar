import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class NavigationServiceService {

  notify = new BehaviorSubject(undefined);

  constructor() { }

}
