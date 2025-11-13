import { Component, inject } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  private readonly _activatedRoute = inject(ActivatedRoute);
  checkoutForm !: FormGroup

  ngOnInit (){
    this.getCartId()
    this.initForm()

  }

  getCartId(){
    let {cartId} = this._activatedRoute.snapshot.params

  }

  initForm(){
    this.checkoutForm = new FormGroup({
      address : new FormControl(null, [Validators.required]),
      city : new FormControl(null, [Validators.required]),
      phone : new FormControl(null, [Validators.required]),
    })
  }

  completeOrder(){
    console.log(this.checkoutForm.value); 
  }

  


}
