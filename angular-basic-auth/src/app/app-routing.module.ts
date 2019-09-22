import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path : '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'logout', component:LoginComponent},
  {path: 'welcome' , component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
