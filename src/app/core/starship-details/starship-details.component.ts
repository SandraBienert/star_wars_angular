import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.css'
})
export class StarshipDetailsComponent implements OnInit {

  starship: any;
  starshipId: number | any;

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.starshipId = +params['id']; // Accede al parámetro 'id'
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.loadStarshipDetails(id);
    }
  }

  loadStarshipDetails(id: string): void{
    this.apiService.getStarshipById(id).subscribe((data)=>{
      this.starship = data;
    })
  }

  getStarshipImage(): string {
    const id= this.apiService.extractIdFromUrl(this.starship.url);
    return this.apiService.getStarshipImageUrl(id);
}

}
