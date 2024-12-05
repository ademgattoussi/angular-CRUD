import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-subjects-update',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './subjects-update.component.html',
  styleUrl: './subjects-update.component.css',
})
export class SubjectsUpdateComponent implements OnInit {
  subject = {
    subject_id: '',
    subject_name: '',
    subject_code: '',
    department: '',
    description: '',
    id: '',
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute // Inject ActivatedRoute to access route parameters
  ) {}

  ngOnInit(): void {
    // Get the subject ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Fetch the subject data by its ID
      this.apiService.getSubjectById(id).subscribe((subjectData) => {
        this.subject = subjectData; // Populate the subject object with the data fetched from the API
      });
    }
  }

  updateSubject() {
    this.apiService
      .updateSubjectById(this.subject.id, this.subject)
      .subscribe(() => {
        this.router.navigate(['/subjects']);
      });
  }
}
