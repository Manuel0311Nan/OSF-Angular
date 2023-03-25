import { ContactComponent } from './pages/contact/contact.component';
import { SongsComponent } from './pages/songs/songs.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
const routes: Routes = [
  {
    path: 'home',
    component :HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'shows',
    component: ShowsComponent
  },
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
