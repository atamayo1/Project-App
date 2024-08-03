import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompromisedCheckService {

  private apiUrl = 'https://api.example.com/check-compromised'; // Reemplazar con la URL real de la API

  constructor(private http: HttpClient) { }

  checkAccount(email: string): Observable<any> {
    return this.http.post(this.apiUrl, { email })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Manejar el error de manera apropiada
    console.error('Error occurred:', error.message, 'Status code:', error.status);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
