import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { first, take, takeUntil } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],

})
export class ProductsListComponent implements OnInit {

  productsList: any;
  productListFiltered: any;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProductsList().pipe(
      // async // used in html template 
      // first(), // closes subscription once we receive data
      // take(5), // unsubcribes after 5 subscription
      //takeUntill(), // unlimited subscription
      //takeWhile(),
    ).subscribe(products => {
      this.productsList = products;
      this.productListFiltered = this.productsList;
      console.log(this.productsList)
    });

    //this.productsService.getEmployeeWithSalary().subscribe(console.log);
    this.productsService.getSalaryByEmployeeId(2).subscribe(console.log);
  }
  filterByTextFn(event: any) {
    this.productListFiltered = this.productsList.filter((x: any) => x.title.includes(event));
  }

  readFilter(event: any) {
    this.productListFiltered = this.productsList.filter((x: any) => x.category === event);
  }

}
