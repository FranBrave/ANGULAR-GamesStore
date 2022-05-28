import { GamesDetailModule } from './pages/game-detail/games-detail.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: "games", loadChildren: () => import ("./pages/game-list/game-list.module").then(m => m.GameListModule)
},
{
  path: "home",   loadChildren: () => import ("./pages/home/home.module").then(m => m.HomeModule)
},
{
  path: "detail", loadChildren: () => import ("./pages/game-detail/games-detail.module").then(m => m.GamesDetailModule)
},
{
  path: "recomendations" , loadChildren: () => import ("../app/pages/recomendations/recomendations.module").then(m => m.RecomendationsModule)
},
{
  path: "about" , loadChildren: () => import ("../app/pages/about/about.module").then(m => m.AboutModule)
},
{
  path:"", redirectTo: "home" , pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  