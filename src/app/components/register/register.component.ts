import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'coin-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navToLogin() {
    this.router.navigate(['/login']);
  }

  navToNews() {
    this.router.navigate(['/news']);
  }
}
