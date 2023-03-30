import { ContactComponent } from './pages/contact/contact.component';
import { SongsComponent } from './pages/songs/songs.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { AboutComponent } from './pages/about/about.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('../app/pages/home/home.module').then(m=> m.HomeModule)
    //component :HomeComponent
  },
  {
    path: 'about',
    loadChildren: ()=> import('../app/pages/about/about.module').then(m=> m.AboutModule)
    //component: AboutComponent
  },
  {
    path: 'shows',
    loadChildren: ()=> import('../app/pages/shows/shows.module').then(m=> m.ShowsModule)
    //component: ShowsComponent
  },
  // {
  //   path: 'songs',
  //   component: SongsComponent
  // },
  {
    path: 'contact',
    loadChildren: ()=> import('../app/pages/contact/contact.module').then(m=> m.ContactModule)
    //component: ContactComponent
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
