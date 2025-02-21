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


  constructor(private apiServiceService: ApiServiceService){}

private starships : any[] = [];

  ngOnInit(): void {

  }



}
