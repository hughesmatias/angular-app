import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
