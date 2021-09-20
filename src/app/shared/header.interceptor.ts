import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class HeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // if (!req.url.match('intercept')) {
    //   return next.handle(req);
    // }

   let token =  sessionStorage.getItem('login')
    req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer '+ token)
    });
    // req = req.clone({
    //   headers: req.headers.set('ClonedHeaders2', 'b')
    // });
    return next.handle(req);
  }
}