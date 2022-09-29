import { Component, NgModule, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})

export class ToolBarComponent implements OnInit {
  user: User = {
    login: null,
    password: null,
    type: null
  };
  response!: User[];
  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  isLogged() {
    if (this.router.url.startsWith('/list')) {
      this.user.login = String(this.route.snapshot.paramMap.get("user"));
    } else if (this.router.url === '/') {
      this.user.login = null;
    } else if(this.user.login = null){
      this.router.navigate([``]);
    }
    return this.router.url !== '/';
  }

}
