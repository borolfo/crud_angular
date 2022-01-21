import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  template: `<input
  type="checkbox"
  [checked]="darkMode$ | async"
  (change)="onToggle()"
  />`,
})
export class HeaderComponent implements OnInit {

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  sun: boolean = false;
  moon: boolean = true;

  constructor(private darkModeService: DarkModeService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }

  showSun(){
    if(this.sun == false) {
      this.sun = true
      this.moon = false
    }
    else {
      this.sun = false
    }
  }

  showMoon(){
    if(this.moon == false) {
      this.moon = true
      this.sun = false
    }
    else {
      this.moon = false
    }
  }

  logOut(){
    this.authService.logout()
  }

}
