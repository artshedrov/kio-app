import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSectionComponent } from './create-section/create-section.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/service/auth.service';
import {SharedModule} from './shared/shared.module';



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
          {path: 'dashboard', component: DashboardComponent},
          {path: 'create', component: CreateSectionComponent},
          {path: 'section/:id/edit', component: EditSectionComponent}
        ]
      }
      ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class AdminModule { }
