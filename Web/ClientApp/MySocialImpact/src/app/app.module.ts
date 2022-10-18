import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroComponent } from './paginas/publicas/registro.component';
import { WelcomeComponent } from './paginas/publicas/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'registro', component: RegistroComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: '/welcome', pathMatch: 'full'},
      { path: '**', redirectTo: '/welcome', pathMatch: 'full'}
     ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
