import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  _authService=inject(AuthService)
  
  isLoggedIn:any

  constructor() {
    //this.isLoggedIn=this._authService.userData;
    //console.log("is logged in value" ,this.isLoggedIn);
    //console.log(this._authService.userData, "hello user data")
    //console.log(this._authService.userData.asObservable());
    
  }

  ngOnInit(): void {
      this.checkLoggingStatus()
  }

  checkLoggingStatus(){
    this._authService.userData.subscribe({
      next:(res)=>{
        this.isLoggedIn=res
        
      }
    })
  }


  signOut(){
    this._authService.logOut();
    


  }

}
