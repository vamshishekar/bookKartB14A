import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { ActivateChildGuard } from './shared/guards/activate-child.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { DeactivateGuard } from './shared/guards/deactivate.guard';
import { ResolveGuard } from './shared/guards/resolve.guard';

const routes: Routes = [
{
  path: 'user' ,  loadChildren: () => import('./components/user/user.module').then(m => m.UserModule), canActivateChild: [ActivateChildGuard],
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
component: BookComponent, canActivate: [AuthGuard], canDeactivate: [DeactivateGuard], resolve: [ResolveGuard]


}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
