import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../shared/footer/footer.component";
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aidea';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject the platform ID to check the platform
  ) {}

  ngOnInit() {
    // Listen for route changes and reset scroll position only in the browser
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        // Check if the platform is the browser before calling window.scrollTo()
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0); // Reset scroll position to top
        }
      });
  }
}
