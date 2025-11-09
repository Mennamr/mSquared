import { JsonPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy{

  apiError!:string
  isCallingAPI:boolean=false
  subscription:Subscription=new Subscription() //to navigate without calling the API
  registerForm: FormGroup= new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]\w{5,}$/)]),
    rePassword:new FormControl(),
    phone:new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, this.validateRePassword)

  _authService=inject(AuthService);
  _router=inject(Router)

  register(){
    console.log(this.registerForm);
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
    else{
      this.apiError='' //make sure the error does not appear until the api is called
      //if(this.isCallingAPI==false){
        
        this.isCallingAPI=true
        if(this.subscription){this.subscription.unsubscribe()}
        this.subscription= this._authService.registerUser(this.registerForm.value).subscribe({
          next:(res)=>{
            console.log(res);
            this.isCallingAPI=false
            this._router.navigate(['/auth/login'])
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

  validateRePassword(form:AbstractControl){
    const password=form.get("password")?.value;
    const rePassword=form.get("rePassword")?.value;

    if(password == rePassword){
      return null;
    }
    else{
      return {mismatch:true}
    }
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
