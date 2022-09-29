import { Component } from '@angular/core';
import { User } from './interfaces/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'vendaingresso-portal';
  user?:User;

  setUser() {
    console.log("Deu certo")
  }

  isLogged():boolean{
    if(this.user){
      if(this.user.login){
        return true
      }
    }
    return false;
  }
}
