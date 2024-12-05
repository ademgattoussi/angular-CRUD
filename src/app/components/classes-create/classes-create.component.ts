import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-classes-create',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './classes-create.component.html',
  styleUrl: './classes-create.component.css'
})
export class ClassesCreateComponent {
  class = {
    class_id : "",
    subject_id : "",
    class_name : "",
    students: []as string[],
  };

  constructor(private apiService: ApiService, private router: Router) {}

  get studentsString(): string {
    return this.class.students.join(', '); // Convert array to a comma-separated string
  }

  set studentsString(value: string) {
    this.class.students = value.split(',').map((s) => s.trim()); // Convert string to an array
  }

  addClass() {
    this.apiService.addClass(this.class).subscribe(() => {
      this.router.navigate(['/classes']);
    });
  }
}
