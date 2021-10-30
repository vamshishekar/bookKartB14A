import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  private readonly URL = "";// environment.url;

  sample$ = of(1,2,3,4,5,6,7,8);
  
  getProductsList(): Observable<any> {
    return of('hi');//this.http.get("https://jsonplaceholder.typicode.com/comments");//this.URL + '/book/');
  }




  addToCart(productId: any) {
    let userId = sessionStorage.getItem('userId');
    return this.http.post<any>(`${this.URL}/shoppingcart/addToCart/${userId}/${productId}`, {});
  }


  registerUser(body: any) {
    return this.http.post<any>(`${this.URL}/user/`, body);
  }


  getEmployee(): Observable<employee> {
    const employee: employee = { id: 1, name: 'balaji', department: 'software', salary: 0 };
    return of(employee);
  }

  getSalary(): Observable<salary[]> {
    const employee: salary[] = [
      { employeeId: 1, month: 11, salary: 1000 },
      { employeeId: 2, month: 11, salary: 100011 },
      { employeeId: 3, month: 11, salary: 10002},
    ];
    return of(employee);
  }

  getEmployeeWithSalary(): Observable<employee> {
    return this.getEmployee().pipe(
      switchMap((employee: employee) =>
        this.getSalary().pipe(map((salary: salary[]) => {
          employee.salary = salary.filter(x => x.employeeId === employee.id)[0].salary;
          return employee;
        }))
      )
    )
  }

  getEmployeeWithSalary2(): Observable<employee> {
    return this.getEmployee().pipe(
      // switchMap((employee: employee) =>
      //   this.getSalary().pipe(map((salary: salary) => {
      //     employee.salary = salary.salary;
      //     return employee;
      //   }))
      // )
    )


    // this.getSalary().pipe(map((salary: salary) => {
    //   // employee.salary = salary.salary;
    //   // return employee;
    // }))
  }

  getSalaryByEmployeeId(id: number) {
    return this.getSalary().pipe(
      tap(x=> console.log()),
      map((sal: salary[]) => 
      sal.find(x => x.employeeId == id)?.salary
      ),
      tap(x=> console.log()
      ))
  }



}


export interface employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

export interface salary {
  employeeId: number;
  month: number;
  salary: number;
}