import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { RegisterConfirmation } from "./register-confirmation/register-confirmation";
import { Homepage } from "./homepage/homepage";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Register, Login, RegisterConfirmation, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
