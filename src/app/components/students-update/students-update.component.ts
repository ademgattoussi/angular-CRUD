import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-students-update',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './students-update.component.html',
  styleUrl: './students-update.component.css'
})
export class StudentsUpdateComponent implements OnInit {
  student = {
    student_id: '',
    first_name: '',
    last_name: '',
    email: '',
    class_id: '',
    student_date: '',
    start_time: '',
    end_time: '',
    id: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute  // Inject ActivatedRoute to access route parameters
  ) {}

  ngOnInit(): void {
    // Get the session ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Fetch the session data by its ID
      this.apiService.getStudentById(id).subscribe((studentData) => {
        this.student = studentData;  // Populate the student object with the data fetched from the API
      });
    }
  }

  updateStudent() {
    this.apiService.updateStudentById(this.student.id, this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
