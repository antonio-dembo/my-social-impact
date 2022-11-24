import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUser } from 'src/app/paginas/registro/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  users: IUser[] = [];
  userUrl = 'src/api/users/users.json';
 
  constructor(private http: HttpClient) { }

  /** POST: add a new user to the database */
  addUser(user: IUser): Observable<IUser>{

    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<IUser>(this.userUrl, user, httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occured? ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMessage));
  }

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
