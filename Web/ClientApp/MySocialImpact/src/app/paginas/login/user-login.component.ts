import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'msi-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  pageTitle = "MySocialImpact";

  formLogin = this.formBuilder.group({
    email: '',
    password: ''
  });
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(`Data login: email: ${this.formLogin.value.email} Password: ${this.formLogin.value.password}` );
    window.alert("User login triggered.");
    this.router.navigate(['/projects']);
  }

  registerAsUser(){
    this.router.navigate(['/registro']);
  }

}
