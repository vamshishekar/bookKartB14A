import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(private authService: AuthService) { }
  resolve(): any {

   return this.authService.isAuthenticated()
      // .pipe(map(data => {
      //   if (data.token) {
      //     return true;
      //   }
      //   return false;
      // }))
     ;

  }

}
