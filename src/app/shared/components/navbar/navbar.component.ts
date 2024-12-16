import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuOpen = false; // Estado para el menú móvil
  showMenu = false;

  constructor(private router: Router) {}

  toggleMenuMobile(): void {
    this.menuOpen = !this.menuOpen;
    console.log("mostrando menú mobile......");
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    console.log("mostrando menú...", this.menuOpen);
  }  

  toCart() {
    this.router.navigate(['/pages/cart']
      //  { state: { _id: _id } }
      );
  }

  toInventary() {
    this.router.navigate(['owner/list']      
      //  { state: { _id: _id } }
      );
      this.showMenu = false;
  }

  toHome() {
    this.router.navigate(['/']
      //  { state: { _id: _id } }
      );
  }

  addCart() {
    console.log("agregando...");
  }

}
