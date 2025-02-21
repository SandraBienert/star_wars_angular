import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

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

  constructor(private apiServiceService: ApiServiceService){}

  loadStarships(url:string|null|undefined = this.apiServiceService['apiUrl']):void {
    if(this.loading || !url ) return;
    this.loading = true;

    this.apiServiceService.getDataStarships().subscribe((data) =>{
      this.starships = [...this.starships, ...data.results];
      this.nextUrl = data.next;
      this.loading = false;
    });
  }

  viewMore(): void {
    this.currentPage++;
    this.loadStarships();
  }


  ngOnInit(): void {
    this.loadStarships();
  }

}
