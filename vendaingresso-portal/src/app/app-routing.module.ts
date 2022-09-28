import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { LoginComponent } from './components/login/login.component';
import { SearchTicketComponent } from './components/search-ticket/search-ticket.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'list/:user', component: EventListComponent},
  {path:'list', component: EventListComponent},
  {path:'retirar-ticket/:id', component: BuyTicketComponent},
  {path:'cadastrar-usuario', component: UserRegisterComponent},
  {path:'iformacao-usuario/:id', component: UserInfoComponent},
  {path:'buscar-ingresso', component: SearchTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
