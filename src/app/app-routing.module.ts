import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: "games", loadChildren: () => import ("../app/pages/games/games.module").then(m => m.GamesModule)
},
{
  path: "recomendations" , loadChildren: () => import ("../app/pages/recomendations/recomendations.module").then(m => m.RecomendationsModule)
},
{
  path: "about" , loadChildren: () => import ("../app/pages/about/about.module").then(m => m.AboutModule)
},
{
  path:"", redirectTo: "/games" , pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
