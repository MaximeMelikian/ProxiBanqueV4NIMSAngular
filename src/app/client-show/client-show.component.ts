import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';

@Component({
    selector: 'app-client-show',
    templateUrl: './client-show.component.html',
    styleUrls: ['./client-show.component.css']
})
export class ClientShowComponent implements OnInit {


   id = this.activateRoute.snapshot.params['id'];
    clientDetails: Client;

    constructor(private service: ClientService, private activateRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }

    ngOnInit() {
        this.http.get("http://localhost:8080/myapp/customers/1").subscribe(
            (data: Client) =>{
this.clientDetails = data;
            }
        );
    }


}
