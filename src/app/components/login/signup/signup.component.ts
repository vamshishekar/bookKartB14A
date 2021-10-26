import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
     //this.productsService.getProductsList().subscribe(x=> console.log(x));
  }

}
