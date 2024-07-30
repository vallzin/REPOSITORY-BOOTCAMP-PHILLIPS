import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy!: string;

  constructor( private CourseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.CourseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error', err)
    })
  }

  deleteById(courseId: number): void {
    this.CourseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    })
  }


  set filter(value:string){
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }



}

