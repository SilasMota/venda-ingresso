import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { MatListModule } from '@angular/material/list';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserRegiserSuccesComponent } from './components/user-register/user-regiser-succes/user-regiser-succes.component';
import { SearchTicketComponent } from './components/search-ticket/search-ticket.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    EventCardComponent,
    EventListComponent,
    BuyTicketComponent,
    LoginComponent,
    HomepageComponent,
    UserRegisterComponent,
    UserInfoComponent,
    UserRegiserSuccesComponent,
    SearchTicketComponent,
    TicketCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
