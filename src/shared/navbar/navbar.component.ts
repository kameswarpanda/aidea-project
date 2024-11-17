import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../../Authservice/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = false;
  constructor(private router: Router, private authService:AuthService) {}


  ngOnInit() {
    // Subscribe to the loggedIn$ observable to react to login state changes
    this.authService.loggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  onLogout() {
    this.authService.logout(); // Log the user out when the logout button is clicked
    this.authService.clearHistory();
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
}
