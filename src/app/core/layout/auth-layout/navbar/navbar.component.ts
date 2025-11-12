import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  _authService=inject(AuthService)
  isLoggedIn:any

  constructor() {
    this.isLoggedIn=this._authService.userData;
    console.log(this.isLoggedIn);
    
    /*this._authService.userData.subscribe({
      next:(res)=>{
        console.log(res,"hello from navbar");
        
      }
    })*/
    //console.log(this._authService.userData, "hello user data")
    //console.log(this._authService.userData.asObservable());
    
  }

}
