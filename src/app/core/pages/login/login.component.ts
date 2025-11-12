import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
    apiError!:string
    isCallingAPI:boolean=false
    subscription:Subscription=new Subscription() //to navigate without calling the API
    loginForm!:FormGroup
    toggleInput=true
    /*loginForm: FormGroup= new FormGroup({
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]\w{5,}$/)]),
    })*/

      //form builder

      _formBuilder=inject(FormBuilder)
      
  
    _authService=inject(AuthService);
    _router=inject(Router)

    ngOnInit(): void {
         this.initForm();
    }

    initForm(){
     //form builder
      this.loginForm=this._formBuilder.group({
        email:[null, [Validators.required, Validators.email]],
        password:[null,[Validators.required, Validators.pattern(/^[A-Z]\w{5,}$/)]]

      })
    }
  
    login(){
      console.log(this.loginForm);
      if(this.loginForm.invalid){
        this.loginForm.markAllAsTouched();
      }
      else{
        this.apiError='' //make sure the error does not appear until the api is called
        //if(this.isCallingAPI==false){
          
          this.isCallingAPI=true
          if(this.subscription){this.subscription.unsubscribe()}
          this.subscription= this._authService.loginUser(this.loginForm.value).subscribe({
            next:(res)=>{
              console.log(res);
              this.isCallingAPI=false
              localStorage.setItem("userToken", res.token )
              this._authService.saveUser();
              this._router.navigate(['/home'])
            },
            error:(err)=>{
              console.log(err)
              this.apiError=err.error.message
              this.isCallingAPI=false
            },
            complete:()=>{}
  
          })
        //}
        
      }
    }

    togglePassword(){
      this.toggleInput=!this.toggleInput
    }
  
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
  
  }


