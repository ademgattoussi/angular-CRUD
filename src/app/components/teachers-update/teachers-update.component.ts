import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-teachers-update',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './teachers-update.component.html',
  styleUrl: './teachers-update.component.css'
})
export class TeachersUpdateComponent implements OnInit {
  teacher = {
    teacher_id: '',
    first_name: '',
    last_name: '',
    email: '',
    department: '',
    phone: '',
    id: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute  // Inject ActivatedRoute to access route parameters
  ) {}

  ngOnInit(): void {
    // Get the teacher ID from the route parameters
    const teacherId = this.route.snapshot.paramMap.get('id');

    if (teacherId) {
      // Fetch the teacher data by its ID
      this.apiService.getTeacherById(teacherId).subscribe((teacherData) => {
        this.teacher = teacherData;  // Populate the teacher object with the data fetched from the API
      });
    }
  }

  updateTeacher() {
    this.apiService.updateTeacherById(this.teacher.id, this.teacher).subscribe(() => {
      this.router.navigate(['/teachers']);
    });
  }
}
