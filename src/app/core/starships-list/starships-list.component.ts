import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-starships-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starships-list.component.html',
  styleUrl: './starships-list.component.css',
  providers: [ApiServiceService]
})
export class StarshipsListComponent implements OnInit {
  starships: any[] = [];
  loading = false;
  nextUrl: string | null = null;
  currentPage: any;

  constructor(private apiServiceService: ApiServiceService, private router: Router){}

  ngOnInit(): void {
    this.apiServiceService.getDataStarships(this.currentPage).subscribe(data => {
      if (data) {
        this.starships = data.results;
      } else {
        console.log('No se pudieron cargar las naves');
      }
    });
  }

  loadStarships(url:string|null|undefined = this.apiServiceService['apiUrl']):void {
    if(this.loading || !url ) return;
    this.loading = true;

    this.apiServiceService.getDataStarships(this.currentPage).subscribe((data) =>{
      this.starships = [...this.starships, ...data.results];
      this.nextUrl = data.next;
      this.loading = false;
    });
  }

  viewMore(): void {
    this.currentPage++;
    this.loadStarships();
  }

  navigateToStarship(starshipId: number) {
    this.router.navigate(['/starship', starshipId]); // Navega a la ruta
  }


}
