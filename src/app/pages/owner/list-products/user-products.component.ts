import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-products',
  standalone: true,
  imports: [],
  templateUrl: './user-products.component.html',
  styleUrl: './user-products.component.css'
})
export class UserProductsComponent {

  constructor(
    public router: Router,
  ){}

  //functions

  backHome() {
    this.router.navigate(['/']
      //  { state: { _id: _id } }
      );
  }

  addProduct() {
    this.router.navigate(['/owner/create']
      //  { state: { _id: _id } }
      );
  }

  toEdit() {
    this.router.navigate(['/owner/update/01']
      //  { state: { _id: _id } }
      );
  }
  
}
