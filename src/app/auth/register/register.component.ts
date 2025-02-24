import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
email = '';
password= '';

constructor(private authService: AuthService){}

async onRegister(): Promise<void> {
  if (!this.email || !this.password) {
    alert('Si us plau, omple tots els camps.');
    return;
  }


}


}
