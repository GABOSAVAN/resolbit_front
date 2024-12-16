import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(
    public router: Router,
  ){}
  //funtions

  details() {
    this.router.navigate(['/pages/product/01']
      //  { state: { _id: _id } }
      );
  }

  addCart() {
    console.log("agregando...");
  }

}
