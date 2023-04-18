import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('../home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: "404",
    loadChildren: () => import('../page-404/page-404.module').then(m => m.Page404Module)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
