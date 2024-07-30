import { AppPipeModule } from './../pipe/app-pipe-module';
import { NgModule } from "@angular/core";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/component/star/star.module";

@NgModule({
  declarations: [
    CourseInfoComponent,
    CourseListComponent,


  ],
  imports:[
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild ([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule{

}
