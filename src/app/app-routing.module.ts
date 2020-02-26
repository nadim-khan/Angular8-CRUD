import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { CreateComponent } from './create/create.component';
import { CompanyComponent } from './details/company/company.component';


const routes: Routes = [
  {path:'',component : HomeComponent},
  {path:'employee',component : HomeComponent},
  {path:'create',component:CreateComponent},
  {path:'edit',component:EditComponent},
  {path:'company',component:CompanyComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
