import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/login/sign/sign.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "client", component: ClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
