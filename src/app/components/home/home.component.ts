import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Announcement } from '../../models/announcement.interface';
import { CityBlock } from '../../models/cityblock.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private httpClient: HttpClient = inject(HttpClient);
  private router: Router = inject(Router);

  title: string = 'Mes annonces';
  announcements: Announcement[] = [];

  cities: CityBlock[] = [
    {
      name: 'Amsterdam',
      image: 'amsterdam.jpg',
      slogan: 'Explore les canaux et les maisons typiques',
      announcementId: 26,
    },
    {
      name: 'Paris',
      image: 'paris.avif',
      slogan: 'Vis la ville lumière comme jamais',
      announcementId: 27,
    },
    {
      name: 'Roma',
      image: 'roma.avif',
      slogan: 'Marche dans l’histoire entre deux pasta',
      announcementId: 28,
    },
    {
      name: 'London',
      image: 'london.webp',
      slogan: 'Découvre Big Ben et les vibes britanniques',
      announcementId: 29,
    },
  ];

  ngOnInit(): void {
    this.httpClient
      .get<Announcement[]>('http://51.254.112.67/api/announcements', {
        headers: { accept: 'application/json' },
      })
      .subscribe({
        next: (data) => {
          this.announcements = data;

          // Ajoute chaque annonce dans son bloc ville
          this.cities = this.cities.map((city) => ({
            ...city,
            announcement: this.announcements.find(
              (a) => a.id === city.announcementId
            ),
          }));

          console.log(this.cities);
          console.log(this.announcements); // check ici que les IDs sont bien 1, 2, 3, 4
        },
      });
  }

  goToCity(city: string) {
    this.router.navigate(['/announcements'], { queryParams: { city } });
  }
}
