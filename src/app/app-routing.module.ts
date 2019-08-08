import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "users",
    component: UserListComponent
  },
  {
    path: "users/:id",
    component: UserEditComponent
  },
  {
    path: "**",   // fontos, hogy ez a legutolsó legyen, mert sorban halad
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
