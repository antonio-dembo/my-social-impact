import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/paginas/registro/user';
import { RegistrationService } from 'src/app/Service/registration.service';

@Component({
  selector: 'msi-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  message: string = '';
  tipoUsuario = '' ;
  users: IUser[] = [];
  
  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  });
  
  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public registerUser() {
    this.registrationService.registerUser(this.checkoutForm.value as IUser);
    window.alert("The user has been registered!!");
    this.router.navigate(['/login']);
    //console.warn("The user has been registered. ", this.checkoutForm.value);
  }

  addUser(){
    const rand = '';
    const user = this.checkoutForm.value as IUser;
    user.userId = "3";
    
    this.registrationService.addUser(user).subscribe( u => this.users.push(u));
    console.warn("The user added", this.users[0]);
  }

}
