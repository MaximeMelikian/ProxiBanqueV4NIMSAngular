import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Client } from '../model/client';
import { retry,catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ClientService {
    createClient(clientDetails: Client): any {
        throw new Error("Method not implemented.");
   }
    deleteClient(id: any): any {
        throw new Error("Method not implemented.");
    }
    endpoint = 'http://localhost:3000'; // => port du json serveur
    //endpoint= 'http://localhost:8080/myapp';




    constructor(private http: HttpClient) { }

   // getClients(): Observable<Client[]> {
       // return this.http.get<Client[]>(this.endpoint + '/clients');
   // }

  getClient(id): Observable<Client> {
        return this.http.get<Client>(this.endpoint + '/customers/' + id)
            .pipe(
                catchError(this.handleError)
            )
    }



  

       handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}