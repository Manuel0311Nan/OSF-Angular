import { AdministradorModule } from './pages/administrador/administrador.module';
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
    path: 'admin',
    loadChildren: ()=> import('../app/pages/administrador/administrador.module').then(m=> m.AdministradorModule)
    //component :HomeComponent
  },
  {
    path: 'admin/shows',
    loadChildren: ()=> import('../app/pages/admin-shows/admin-shows.module').then(m=> m.AdminShowsModule)
    //component :HomeComponent
  },
  {
    path: 'admin/news',
    loadChildren: ()=> import('../app/pages/admin-news/admin-news.module').then(m=> m.AdminNewsModule)
    //component :HomeComponent
  },
  {
    path: 'admin/photos',
    loadChildren: ()=> import('../app/pages/admin-photo/admin-photo.module').then(m=> m.AdminPhotoModule)
    //component :HomeComponent
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
