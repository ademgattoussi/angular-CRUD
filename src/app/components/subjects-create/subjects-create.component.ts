import { Component } from '@angular/core';
import { ApiService } from '../../services/data.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-subjects-create',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './subjects-create.component.html',
  styleUrl: './subjects-create.component.css'
})
export class SubjectsCreateComponent {
  subject = {
    subject_id: '',
    subject_name: '',
    subject_code: '',
    department: '',
    description: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  addSubject() {
    this.apiService.addSubject(this.subject).subscribe(() => {
      this.router.navigate(['/subjects']);
    });
  }
}