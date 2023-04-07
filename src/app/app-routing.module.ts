import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { TopicsComponent } from './components/topics/topics.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'topics', component: TopicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
