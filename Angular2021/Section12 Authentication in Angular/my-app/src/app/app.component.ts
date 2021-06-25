import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: darkblue;
      }
    `,
  ],
})
export class AppComponent implements OnInit {

  constructor(private authService:AuthService)
  {
  }

  ngOnInit(): void {
    this.authService.autoSignIn();
  }
}
