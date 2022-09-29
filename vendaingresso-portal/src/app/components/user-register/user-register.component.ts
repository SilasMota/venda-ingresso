import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/User';
import { LoginService } from 'src/app/services/login/login.service';
import { UserRegiserSuccesComponent } from './user-regiser-succes/user-regiser-succes.component';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  formGroup = this._formBuilder.group({
    loginForm: ['', Validators.required],
    typeForm: ['', Validators.required],
    password: ['', Validators.required],
  });
  hide = true;
  user:User = {
    login:null,
    password:null,
    type:null
  };
  response!:User [];
  constructor(private _formBuilder: FormBuilder, private loginService:LoginService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.loginService.registerUser(this.user).subscribe((user) => (this.response = user));
    if(this.response){
      this.user.login = null;
      this.user.type = null;
      this.user.password = null;
      this.dialog.open(UserRegiserSuccesComponent);
    }
  }
}
