import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'msi-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  message: string = '';
  
  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public registerUser() {
    console.warn("Your order has been submitted ", this.checkoutForm.value);
    
    this.message = "Vamos registrar o usuario.";

  }

}
