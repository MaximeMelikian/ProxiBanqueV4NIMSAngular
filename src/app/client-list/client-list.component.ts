import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Client } from '../model/client';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css'],
    providers: [ClientService]
})
export class ClientListComponent implements OnInit {



    clients: Client[];

    constructor(private service: ClientService, private http: HttpClient) { }

    ngOnInit() {
        this.http.get("http://localhost:8080/myapp/customers").subscribe(
            (data: Client[]) =>{
this.clients=data;
            }
        );
    }


}
