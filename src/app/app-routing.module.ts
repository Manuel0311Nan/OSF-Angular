import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'songs',
    loadChildren: ()=> import('../app/pages/songs/songs.module').then(m=> m.SongsModule)
    //component: ShowsComponent
  },
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
