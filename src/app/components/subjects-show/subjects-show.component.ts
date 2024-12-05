import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects-show',
  standalone: true,
  imports: [],
  templateUrl: './subjects-show.component.html',
  styleUrl: './subjects-show.component.css'
})
export class SubjectsShowComponent implements OnInit {
  subjects: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchSubjects();
  }

  updateSubject(id: any) {
    this.router.navigate(['/subjects-update', id]);
  }

  fetchSubjects() {
    this.apiService.getSubjects().subscribe(data => {
      this.subjects = data;
    });
  }

  deleteSubject(id : any) {
    this.apiService.deleteSubjectById(id).subscribe(() => {
      this.fetchSubjects();
    });
  }
}
