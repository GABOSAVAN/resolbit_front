import { ProductService } from './../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class NavbarComponent{

  menuOpen = false; // Estado para el menú móvil
  showMenu = false;
  items: number = 0;

  constructor(
    private router: Router,
    public productService: ProductService
  ) {}


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
      );
  }

  toInventary() {
    this.router.navigate(['owner/list']      
      );
      this.showMenu = false;
  }

  toHome() {
    this.router.navigate(['/']
      );
  }  

  restart(){
    localStorage.removeItem('products');
    this.productService.loadInit()
    location.reload();
  }

}
