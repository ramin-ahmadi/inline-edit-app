import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Table with Inline edit cell';
  firstName: string = 'Ramin';
  lastName: string = 'Ahmadi';
}
