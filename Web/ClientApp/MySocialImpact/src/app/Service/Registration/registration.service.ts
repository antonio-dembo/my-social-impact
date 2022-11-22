import { Injectable, Input } from '@angular/core';
import { IUser } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private users: IUser[] = [];

  constructor() { }

  registerUser(user: IUser){
    this.users.push(user);
  }

  getUsers(){
    return this.users;
  }

  clearUsers(){
    this.users = [];
    return this.users;
  }

}
