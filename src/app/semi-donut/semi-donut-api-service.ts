import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { ISemiDonut } from './semi-donut';

@Injectable({
    providedIn: 'root'
})

export class RestApiService {

   private empUrl = '../assets/data.json';

    constructor(private http: HttpClient) { }
    getData(): Observable<any> {
        return this.http.get<ISemiDonut[]>(this.empUrl)
            .pipe(
               tap(data => data),
                catchError(this.handleError)
            )
    }  

    private handleError(err: HttpErrorResponse) {
        let errMessage = '';

        if (err.error instanceof ErrorEvent) {
            errMessage = `An error occured: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        return throwError(errMessage);
    }
}
