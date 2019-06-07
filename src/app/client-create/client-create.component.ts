import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { Client } from '../model/client';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

    @Input()
    clientDetails = new Client();


   // constructor(
        //public service: ClientService,
       // public router: Router
  //  ) {
        // this.clientDetails.adresse = new Adresse();
   // }

  ngOnInit() {}  
 // addClient(dataClient) {
   //this.service.createClient(this.clientDetails).subscribe((data: {}) => {
   //    this.router.navigate(['/clients-list']);
// });
  // }
//ngOnInit() {
      //  this.http.post("http://localhost:8080/myapp/customers").subscribe(
       //     (data: Client[]) =>{
//this.clients=data;
         //   }
        //);
  
        
       
        
    }



