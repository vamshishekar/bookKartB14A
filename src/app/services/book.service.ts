import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get('https://bookcart.azurewebsites.net/api/Book');

  }


  getBookById(id: string): Observable<any> {

    let params = new HttpParams().set('id', id);
    return this.http.get('https://bookcart.azurewebsites.net/api/Book/' + id);
    //https://bookcart.azurewebsites.net/api/Book/12
  }



  getBookById2(id: string): Observable<any> {

    let params = new HttpParams().set('id', id);
    return this.http.get('https://bookcart.azurewebsites.net/api/Book', { params: params });
    //https://bookcart.azurewebsites.net/api/Book?id=12
  }


  postCheckout(id: any, body: any): Observable<any> {
    id = 60;
    body = { "orderDetails": [{ "book": { "bookId": 2, "title": "HP2", "author": "JKR", "category": "Mystery", "price": 234, "coverFileName": "9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg" }, "quantity": 2 }, { "book": { "bookId": 3, "title": "HP3", "author": "JKR", "category": "Romance", "price": 213, "coverFileName": "c63ade52-3f90-41fa-980a-1136b6ad2128HP3.jpg" }, "quantity": 1 }, { "book": { "bookId": 4, "title": "HP4", "author": "JKR", "category": "Fiction", "price": 321, "coverFileName": "9d31690d-3b1d-4faa-a1d2-3a680a935008HP4.jpg" }, "quantity": 1 }], "cartTotal": 1002 };
    return this.http.post('https://bookcart.azurewebsites.net/api/CheckOut/' + id, body);
  }


  login(body: any) {
    // let body = { "username": "hihowareyou", "password": "Balajivelu147" };
    return this.http.post('https://bookcart.azurewebsites.net/api/login', body);
  }

  // login() {
  //   let body = { "username": "hihowareyou", "password": "Balajivelu147" };
  //   return this.http.('https://bookcart.azurewebsites.net/api/login', body);
  // }
}



// 1,balaji, B.Tech


// update balaji's folder