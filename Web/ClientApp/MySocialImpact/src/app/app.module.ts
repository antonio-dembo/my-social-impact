import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { WelcomeComponent } from './paginas/home/welcome.component';
import { ProjectListComponent } from './paginas/projeto/project-list.component';
import { UserLoginComponent } from './paginas/login/user-login.component';
import { AppRoutingModule } from './app-routing.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    WelcomeComponent,
    UserLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ProjectListComponent,
    //NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
