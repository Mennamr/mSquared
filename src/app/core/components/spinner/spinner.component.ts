import { ChangeDetectorRef, Component, Inject,inject, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent implements OnInit {
  _spinnerService=inject(NgxSpinnerService)
  cdRef=inject(ChangeDetectorRef)

  showSpinner=false;


  ngOnInit(): void {
      this.init()
  }

  init(){
    this._spinnerService.spinnerObservable.subscribe({
       next:(res)=>{console.log(res);
       }
    }
     
    )


  }

}
