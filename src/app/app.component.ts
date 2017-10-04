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

  /*
    Demonstrate 2 different ways to update 'clock' asynchronously
 */

  /*
   * Technique 1
   */

  /*
    // Must add async pipe in template:
    //    '{{ clock | async }}'
    // make sure variable in template just says 'clock'
    clock = Observable.interval(1000);
  
    constructor() {
       this.clock.subscribe(console.log.bind(console));
    }
    */

  /*
   * Technique 2
   */
    // No need for async pipe
    // Make sure variable in template says 'clock$'
    clock$;

  constructor() {
    Observable.interval(1000)
      .map((x) => x + 1)
      .subscribe((x) => {
        this.clock$ = x;
      });
  }

}
