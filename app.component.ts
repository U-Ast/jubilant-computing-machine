import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'last';
  button: any; 
  constructor() {
  }
  buttonFunction(button: { innerText: string; }) {
    button.innerText = "Опёнок тёмный или Armillaria ostoyae";
  }
}
