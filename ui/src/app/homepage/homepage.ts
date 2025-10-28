import { Component } from '@angular/core';
import { Menubar } from "./menubar/menubar";
import { Navbar } from "./navbar/navbar";
import {Login } from  "../login/login";
import { Register } from '../register/register';
import { RegisterConfirmation } from '../register-confirmation/register-confirmation';
import { Rightsidebar } from './rightsidebar/rightsidebar';
import { Secondrightpanel } from './secondrightpanel/secondrightpanel';


@Component({
  selector: 'app-homepage',
  imports: [Menubar, Navbar, Login, Register, RegisterConfirmation, Rightsidebar, Secondrightpanel],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
