import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-counter';

  components:number[] = [1,2,3];

  countChanged(counter:number) {
    console.log(counter);
    console.log(this.components);
  }
}
