import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, tap, catchError, throwError } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    //in real world we can send the server to some remote logging infrastructure instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // a client-side or network error occured
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      //the backend returned an unsuccessful response code
      errorMessage = `Server returned code: ${err.status}, error Message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
