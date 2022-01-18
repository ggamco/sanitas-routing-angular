import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './views/principal-view/principal-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    LoginViewComponent,
    ErrorViewComponent,
    AdminViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // esto es para poder vincular los formularios con objetos en TypeScript
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
