import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pilots-list',
  imports: [CommonModule],
  templateUrl: './pilots-list.component.html',
  styleUrl: './pilots-list.component.css'
})
export class PilotsListComponent {
  @Input() pilotUrls: string[] = [];
  pilots: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnChanges(): void {
    if (this.pilotUrls?.length) {
      this.loadPilots();
    }
  }

  private loadPilots(): void {
    this.apiService.getPilotsByUrls(this.pilotUrls).subscribe(
      (pilots) => (this.pilots = pilots),
    );
  }

  getPilotImage(id: string): string {
    return this.apiService.getPilotImageUrl(id);
  }
}
