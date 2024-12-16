import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-products',
  standalone: true,
  imports: [],
  templateUrl: './update-products.component.html',
  styleUrl: './update-products.component.css'
})
export class UpdateProductsComponent {

  constructor(
    public router: Router,
  ){}
  //funtions

  details() {
    this.router.navigate(['/pages/product/01']
      //  { state: { _id: _id } }
      );
  }
}
