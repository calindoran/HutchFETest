import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,) {
  }

  ngOnInit(): void {
    if (this.authService.snapshot.authed) {
      this.router.navigate(['/dashboard']);
    }

    if (this.route.snapshot.data.action === 'logout') {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }

  login() {
    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}
