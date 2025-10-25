import { Component } from '@angular/core';
import { Menubar } from "./menubar/menubar";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-homepage',
  imports: [Menubar, Navbar],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
