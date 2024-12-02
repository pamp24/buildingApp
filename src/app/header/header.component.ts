import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  appName = 'Apartment Manager';
  isLoggedIn = true; // Example state, replace with actual authentication logic

  logout() {
    console.log('User logged out'); // Replace with actual logout logic
  }
}

