import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-teachers-create',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './teachers-create.component.html',
  styleUrl: './teachers-create.component.css'
})
export class TeachersCreateComponent {
  teacher = {
    teacher_id: '',
    first_name: '',
    last_name: '',
    email: '',
    department: '',
    phone: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

  addTeacher() {
    this.apiService.addTeacher(this.teacher).subscribe(() => {
      this.router.navigate(['/teachers']);
    });
  }
}
