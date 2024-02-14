import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet,
} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {PasswordStrengthMeterComponent} from 'angular-password-strength-meter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
    FormsModule,
    PasswordStrengthMeterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  password: string = '';
  color1: string = 'gray';
  color2: string = 'gray';
  color3: string = 'gray';

  checkPasswordStrength() {
    const lengthValid = this.password.length >= 8;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (!lengthValid && this.password.length > 0) {
      this.color1 = 'red';
      this.color2 = 'red';
      this.color3 = 'red';
    } else if (hasLetters || hasNumbers || hasSymbols) {
      this.color1 = 'red';
      this.color2 = 'gray';
      this.color3 = 'gray';
    } else if (this.password.length === 0) {
      this.color1 = 'gray';
      this.color2 = 'gray';
      this.color3 = 'gray';
    }

    if (
      (lengthValid && hasLetters && hasNumbers)
      || (lengthValid && hasLetters && hasSymbols)
      || (lengthValid && hasNumbers && hasSymbols)
    ) {
      this.color1 = 'yellow';
      this.color2 = 'yellow';
      this.color3 = 'gray';
      console.log('medium')
    }

    if (lengthValid && hasLetters && hasNumbers && hasSymbols) {
      this.color1 = 'green';
      this.color2 = 'green';
      this.color3 = 'green';
    }
  }
}
