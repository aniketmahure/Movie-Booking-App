import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public loginService:LoginService,private router:Router){}
  ngOnInit():void {}
  userLogout(){
    alert("-----------logout----------")
    alert("Before = "+this.loginService.getUsername())
    this.loginService.logout();
    alert("After = "+this.loginService.getUsername())
    this.router.navigate(["api/v1.0/moviebooking/login"]);
  }
}
