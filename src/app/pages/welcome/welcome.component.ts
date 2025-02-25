import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ButtonsComponent],
  providers:[],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(){}

}
