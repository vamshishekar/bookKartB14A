import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'user' ,  loadChildren: () => import('./components/user/user.module').then(m => m.UserModule),
},
{
  path: 'products' ,  loadChildren: () => import('./components/products/product.module').then(m => m.ProductModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
