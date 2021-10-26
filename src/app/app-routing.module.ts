import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
{
  path: 'user' ,  loadChildren: () => import('./components/user/user.module').then(m => m.UserModule),
},
{
  path: 'products' ,  loadChildren: () => import('./components/products/product.module').then(m => m.ProductModule)
},
{
  path: 'partial', loadChildren: () => import('./components/partial/partial.module').then(m=> m.PartialModule)
},
{
  path: 'login2', loadChildren: () => import('./components/login/login.module').then(m=> m.LoginModule)
},

{
path: 'book',
component: BookComponent


}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
