import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// import { AnnouncementComponent } from './pages/announcement/announcement.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  //   { path: 'announcement/:id', component: AnnouncementComponent }, // ✅ route dynamique
];
