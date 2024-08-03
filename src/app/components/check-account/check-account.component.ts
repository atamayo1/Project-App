import { Component } from '@angular/core';
import { CompromisedCheckService } from '../../services/compromised-check.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-check-account',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './check-account.component.html',
  styleUrl: './check-account.component.css'
})
export class CheckAccountComponent {
  email!: string;
  result!: string;
  error!: string;

  constructor(private compromisedCheckService: CompromisedCheckService) { }

  checkAccount() {
    this.error = '';
    this.result = '';

    if (!this.email) {
      this.error = 'Please enter an email address';
      return;
    }

    this.compromisedCheckService.checkAccount(this.email)
      .subscribe({
        next: (data) => {
          if (data.compromised) {
            this.result = 'Your account may be compromised.';
          } else {
            this.result = 'Your account is safe.';
          }
        },
        error: (response) => {
          this.error = 'Error checking account. Please try again later.';
        }
    });
  }
}
