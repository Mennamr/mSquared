import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { log } from 'node:console';
import { NavbarComponent } from './core/layout/auth-layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/auth-layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'msquared';
  _flowbiteService=inject(FlowbiteService);

  ngOnInit(): void {
       this._flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
