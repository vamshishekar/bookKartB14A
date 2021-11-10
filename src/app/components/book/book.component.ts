import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public isSaved: boolean = false;
  constructor(private bookService: BookService, private acitvateRoute: ActivatedRoute) { }

  ngOnInit(): void {
try {
  console.log(this.acitvateRoute.snapshot.data);
  // this.bookService.login().subscribe((x: any) => sessionStorage.setItem('login',x.token));
  this.bookService.getBooks().pipe().subscribe(x=> {


  });
}catch(e){
  console.log(e);
}

    
  }

  checkoutSomething() {
    this.isSaved =true ;
    this.bookService.postCheckout(12,{}).subscribe();
  }

  // confirm(){

  // }

}
