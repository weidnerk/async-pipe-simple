import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ clock$ }}</h1>
  `
})
export class AppComponent {

  clock$;
  // we make clock of type Observable but the template won't be updated with
  //clock = Observable.interval(1000);

  // constructor() {
  //   this.clock.subscribe(console.log.bind(console));
  // }
  constructor() {
    Observable.interval(1000)
    .map((x) => x+1)
    .subscribe((x) => {
      this.clock$ = x;
    });
  }
}
