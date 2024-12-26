import { ProductService } from './../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { Component, effect, OnInit } from '@angular/core';
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

  menuOpen = false; 
  showMenu = false;
  items =  0;
  user: any = null;

  constructor(
    private router: Router,
    public productService: ProductService,
    public authService: AuthService
  ) {
    effect(() => {
      this.items = this.productService.cartsItem()
    });
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }


  toggleMenuMobile(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
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
