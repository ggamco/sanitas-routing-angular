import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { PrincipalViewComponent } from './views/principal-view/principal-view.component';

const routes: Routes = [
  {path: "", component: PrincipalViewComponent},
  {path: "login", component: LoginViewComponent},
  {path: "error", component: ErrorViewComponent},
  {path: "admin", component: AdminViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
