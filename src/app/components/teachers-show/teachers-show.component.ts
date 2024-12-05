import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers-show',
  standalone: true,
  imports: [],
  templateUrl: './teachers-show.component.html',
  styleUrl: './teachers-show.component.css'
})
export class TeachersShowComponent  implements OnInit {
  teachers: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTeachers();
  }

  updateTeacher(id: any) {
    this.router.navigate(['/teachers-update', id]);
  }
  

  fetchTeachers() {
    this.apiService.getTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

  deleteTeacher(id : any) {
    this.apiService.deleteTeacherById(id).subscribe(() => {
      this.fetchTeachers();
    });
  }
}
