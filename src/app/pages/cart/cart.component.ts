import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(
    public router: Router,
  ){}
  //funtions

  toHome() {
    this.router.navigate(['/']
      //  { state: { _id: _id } }
      );
  }

  addCart() {
    console.log("agregando...");
  }
}
