import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SectionPageComponent} from './section-page/section-page.component';
import {MainLayoutComponent} from './public/components/main-layout/main-layout.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'section/:id', component: SectionPageComponent},
  ]
},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '**', component: NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
