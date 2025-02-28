import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  email: string = '';
  password: string = '';

  constructor (){}

  login(){
    console.log('login');
  }

}



