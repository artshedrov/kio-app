import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanActivate, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSectionComponent } from './create-section/create-section.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {AuthGuard} from './shared/service/auth.guard';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardComponent,
    CreateSectionComponent,
    EditSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
          {path: 'create', component: CreateSectionComponent, canActivate: [AuthGuard]},
          {path: 'section/:id/edit', component: EditSectionComponent, canActivate: [AuthGuard]}
        ]
      }
      ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AdminModule { }
