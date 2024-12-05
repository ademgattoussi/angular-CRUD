import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-show',
  standalone: true,
  imports: [],
  templateUrl: './students-show.component.html',
  styleUrl: './students-show.component.css'
})
export class StudentsShowComponent implements OnInit {
  students: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  updateStudent(id: any) {
    this.router.navigate(['/students-update', id]);
  }
  

  fetchStudents() {
    this.apiService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id : any) {
    this.apiService.deleteStudentById(id).subscribe(() => {
      this.fetchStudents();
    });
  }
}
