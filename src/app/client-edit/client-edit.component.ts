import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
// id = this.activatedRoute.snapshot.params['id'];
clientDetails: any = {}


  constructor( ) { }

  ngOnInit() {
  }

}
