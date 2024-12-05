import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/data.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students-create',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './students-create.component.html',
  styleUrl: './students-create.component.css'
})
export class StudentsCreateComponent{
  student = {
    student_id: '',
    first_name: '',
    last_name: '',
    email: '',
    class_id: '',
    student_date: '',
    start_time: '',
    end_time: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  addStudent() {
    this.apiService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}