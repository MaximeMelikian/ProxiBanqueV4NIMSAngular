import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientShowComponent } from './client-show/client-show.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create-client' },
    { path: 'create-client', component: ClientCreateComponent },
    { path: 'client-list', component: ClientListComponent },
    { path: 'client-show/:id', component: ClientShowComponent },
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
