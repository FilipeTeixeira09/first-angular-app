import { Component } from '@angular/core';

@Component({
  // specify the selector that shows on the html file.
  selector: 'app-root',

  // standard component automatically generated
  templateUrl: './app.component.html',

  // this is the standard styling applyied into the app-root component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app';
}