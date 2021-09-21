import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

@Input() product: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }


  addToCart(bookId: any) {
this.productsService.addToCart(bookId).subscribe();
  }
}
