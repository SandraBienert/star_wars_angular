import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  email: string = '';
  password: string = '';

  constructor (private AuthService: AuthService){}

  async onLogin() {
    try {
      const user = await this.AuthService.login(this.email, this.password);
      console.log('Usuario logueado:', user);
      // Redirigir al usuario a la página principal o dashboard
    } catch (error) {
      console.error('Error en el login:', error);
      // Mostrar un mensaje de error al usuario
    }
  }

  async onRegister(): Promise<void> {
    if (!this.email || !this.password) {
      alert('Si us plau, omple tots els camps.');
      return;
    }


  }
}



