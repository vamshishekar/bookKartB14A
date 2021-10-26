import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    // this.bookService.login().subscribe((x: any) => sessionStorage.setItem('login',x.token));
    this.bookService.getBooks().pipe().subscribe();
  }

  checkoutSomething() {
    this.bookService.postCheckout(12,{}).subscribe();
  }

}
