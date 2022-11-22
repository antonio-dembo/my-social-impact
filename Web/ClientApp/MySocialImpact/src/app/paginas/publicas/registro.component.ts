import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IUser } from 'src/app/Models/user';
import { RegistrationService } from 'src/app/Service/Registration/registration.service';

@Component({
  selector: 'msi-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  message: string = '';
  tipoUsuario = '' ;
  
  
  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  });
  
  
  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public registerUser() {
    this.registrationService.registerUser(this.checkoutForm.value as IUser);
    window.alert("The user has been registered!!");
    //console.warn("The user has been registered. ", this.checkoutForm.value);
  }

}
