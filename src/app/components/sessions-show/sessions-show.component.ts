import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessions-show',
  standalone: true,
  imports: [],
  templateUrl: './sessions-show.component.html',
  styleUrl: './sessions-show.component.css'
})
export class SessionsShowComponent implements OnInit {
  sessions: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchSessions();
  }

  updateSession(id: any) {
    this.router.navigate(['/sessions-update', id]);
  }
  

  fetchSessions() {
    this.apiService.getSessions().subscribe(data => {
      this.sessions = data;
    });
  }

  deleteSession(id : any) {
    this.apiService.deleteSessionById(id).subscribe(() => {
      this.fetchSessions();
    });
  }
}
