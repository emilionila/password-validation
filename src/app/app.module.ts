import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {PasswordStrengthMeterComponent} from "angular-password-strength-meter";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, PasswordStrengthMeterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
