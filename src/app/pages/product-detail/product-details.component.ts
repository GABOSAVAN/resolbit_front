import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(
    public router: Router,
  ){}

  //functions

  backHome() {
    this.router.navigate(['/']
      //  { state: { _id: _id } }
      );
  }

  toEdit() {
    this.router.navigate(['/owner/update/01']
      //  { state: { _id: _id } }
      );
  }

}
