import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { BookComponent } from 'src/app/components/book/book.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<any> {
  canDeactivate(
    component: BookComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!component.isSaved) {
      if (confirm('are you sure to navigate')) {
        return true;
      }
      else {
        return false;
      }
    }

    return true;

    //     if(component.isSaved)
    //   return true;
    //   else 
    //   return false;
    // }
  }

}
