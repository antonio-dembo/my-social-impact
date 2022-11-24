import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { WelcomeComponent } from './paginas/home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome', pathMatch: 'full'},
      { path: 'registro', component: RegistroComponent},
      { path: 'welcome', component: WelcomeComponent},      
      //{ path: '**', redirectTo: '/welcome', pathMatch: 'full'}
     ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
