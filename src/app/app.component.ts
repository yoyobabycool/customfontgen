import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fontgen';
    inputText = '';
  letters: string[] = [];

  generateWord() {
    this.letters = [];
    for (const char of this.inputText.toUpperCase()) {
      if (char >= 'A' && char <= 'Z') {
        this.letters.push(`assets/letters/${char}.png`);
      }
    }
  }
}