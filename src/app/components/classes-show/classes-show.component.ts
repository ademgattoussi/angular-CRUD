import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-classes-show',
  standalone: true,
  imports: [],
  templateUrl: './classes-show.component.html',
  styleUrl: './classes-show.component.css'
})
export class ClassesShowComponent implements OnInit {
  classes: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchClasses();
  }

  updateClass(room_id: any) {
    this.router.navigate(['/classes-update', room_id]);
  }
  

  fetchClasses() {
    this.apiService.getClasses().subscribe(data => {
      this.classes = data;
    });
  }

  deleteClass(id : any) {
    this.apiService.deleteClassById(id).subscribe(() => {
      this.fetchClasses();
    });
  }
}
