import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'announcement/:id', component: AnnouncementComponent },
  { path: '**', redirectTo: '' },
];
