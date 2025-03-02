import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { CarrouselService } from '../../services/carrousel.service';



@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  carrouselImages: string[] = []; // Array per emmagatzemar les URLs de les imatges

  constructor(private carrouselService: CarrouselService) {}

  ngOnInit(): void {
    this.carrouselImages = this.carrouselService.carouselImages(); // Carrega les imatges del servei
  }

  }

