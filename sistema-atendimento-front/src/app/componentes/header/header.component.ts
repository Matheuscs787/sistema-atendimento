import * as M from 'materialize-css';
import { Router } from '@angular/router';

import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild('mobile') sideNav?: ElementRef;

  buscarValue: string = '';

  title = 'Confessionário';

  constructor(private router: Router){};

  ngAfterViewInit(): void {
      M.Sidenav.init(this.sideNav?.nativeElement);
  }

  buscar(){
    this.router.navigate(['/procura'])
  }
}
