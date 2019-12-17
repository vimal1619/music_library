import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { paths } from './app-paths';
import { NotFoundComponent } from './not-found/not-found.component';
import { PathResolveService } from './path-resolve.service';
import { AlbumsComponent } from './music-library/albums/albums.component';
import { EditorialComponent } from './admin/editorial/editorial.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: paths.home
  },
  {
    path: paths.home,
    component: HomeComponent
  },
  {
    path: paths.admin,
    component: EditorialComponent
  },
  {
    path: paths.albums,
    component: AlbumsComponent
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
