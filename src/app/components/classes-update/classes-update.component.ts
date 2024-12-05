import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-classes-update',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './classes-update.component.html',
  styleUrl: './classes-update.component.css',
})
export class ClassesUpdateComponent implements OnInit {
  class = {
    class_id : "",
    subject_id : "",
    class_name : "",
    students: [] as string[],
    id: ""
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute  
  ) {}

  ngOnInit(): void {
    
    const class_id = this.route.snapshot.paramMap.get('id');

    if (class_id) {
      
      this.apiService.getClassById(class_id).subscribe((classData) => {
        this.class = classData;  
      });
    }
  }

  get studentsString(): string {
    return this.class.students.join(', ');
  }

  set studentsString(value: string) {
    this.class.students = value.split(',').map((s) => s.trim()); // Convert string to an array
  }

  updateClass() {
    this.apiService.updateClassById(this.class.id, this.class).subscribe(() => {
      this.router.navigate(['/classes']);
    });
  }
}
