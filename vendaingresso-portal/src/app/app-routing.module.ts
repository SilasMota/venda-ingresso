import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { EventListComponent } from './components/event-list/event-list.component';


const routes: Routes = [
  {path:'', component: EventListComponent},
  {path:'retirar-ticket', component: BuyTicketComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
