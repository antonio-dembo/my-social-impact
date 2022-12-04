import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './paginas/home/welcome.component';
import { UserLoginComponent } from './paginas/login/user-login.component';
import { ProjectListComponent } from './paginas/projeto/project-list.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'registro', component: RegistroComponent},
  { path: 'welcome', component: WelcomeComponent},      
  { path: 'projects', component: ProjectListComponent},
  { path: 'login', component: UserLoginComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
