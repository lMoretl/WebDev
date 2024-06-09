import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AlbumsComponent} from "./albums/albums.component";
import {DetailsComponent} from "./details/details.component";
import {PhotosComponent} from "./photos/photos.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'albums', component:AlbumsComponent},
  {path:'albums/:id', component:DetailsComponent},
  {path:'albums/:id/photos', component:PhotosComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
