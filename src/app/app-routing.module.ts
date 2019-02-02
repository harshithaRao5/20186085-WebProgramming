import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {EditComponent} from './edit/edit.component';
// import {ProductComponent} from './product/product.component';


const routes: Routes = [
  // {path:'', component:ProductComponent},
  // {path:'/edit:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
