import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  private readonly URL = "";// environment.url;
  getProductsList(): Observable<any> {
    return of('hi');//this.http.get("https://jsonplaceholder.typicode.com/comments");//this.URL + '/book/');
  }


  addToCart(productId: any) {
    let userId = sessionStorage.getItem('userId');
    return this.http.post<any>(`${this.URL}/shoppingcart/addToCart/${userId}/${productId}`, {});
  }


  registerUser(body: any){
    return this.http.post<any> (`${this.URL}/user/`, body);
  }
}
