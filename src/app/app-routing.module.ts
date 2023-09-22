 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './postdetail/postdetail.component';

const routes: Routes = [
  { path: 'post-detail', component: PostDetailComponent },
  { path: '', redirectTo: '/post-detail', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
