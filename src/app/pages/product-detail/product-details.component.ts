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

  product: any;
  constructor(
    public router: Router,
  ){}

  ngOnInit(): void {

    const storedProduct = localStorage.getItem('selectedProduct');

    if (storedProduct) {
      this.product = JSON.parse(storedProduct);
    } else {
      const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state?.['product'];
    console.log(this.product);
    }
  }

  backHome() {
    this.router.navigate(['/']
      );
  }

  toEdit() {
    this.router.navigate(['/owner/update/', this.product.id],
        { state: { product: this.product } }
      );
  }

}
