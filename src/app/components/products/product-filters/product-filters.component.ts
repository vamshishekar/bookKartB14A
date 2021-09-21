import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {

  @Output() filter: EventEmitter<string> = new EventEmitter();
  @Output() filterByText: EventEmitter<string> = new EventEmitter();

  search = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
// tap()

    ).subscribe(
      // console.log
      x=>{ this.filterByText.next(x)}
      );
    this.search.value;
  }

  filterCategory(value: any) {

    this.filter.next(value);
  }

}
