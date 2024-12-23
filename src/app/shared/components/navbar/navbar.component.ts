import { ProductService } from './../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  menuOpen = false; // Estado para el menú móvil
  showMenu = false;
  items: number = 0;
  user: any = null;
  carts: any = [];

  constructor(
    private router: Router,
    public productService: ProductService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }


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

  login() {
    this.router.navigate(['/pages/login']
      );
  }  

  restart(){
    localStorage.removeItem('products');
    this.productService.loadInit()
    location.reload();
  }

  logout(): void {
    this.user = null;
    this.authService.logout();
  }
  

}
