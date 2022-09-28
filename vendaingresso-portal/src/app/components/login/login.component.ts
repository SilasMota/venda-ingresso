import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });
  hide = true;
  user:User = {
    id:null,
    login:null,
    password:null,
    type:null
  };
  response!:User [];
  constructor(private loginService:LoginService, private router:Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.user).subscribe((user) => (this.response = user));
    this.user = this.response[0];
    if(this.user.id){        
        this.router.navigate([`/list/${this.user.id}`]);
    }
  }

}
