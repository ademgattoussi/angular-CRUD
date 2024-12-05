import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/data.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sessions-update',
  standalone: true,
  templateUrl: './sessions-update.component.html',
  styleUrl: './sessions-update.component.css',
  imports: [FormsModule, RouterModule]

})
export class SessionsUpdateComponent implements OnInit {
  session = {
    session_id: '',
    subject_id: '',
    teacher_id: 0,
    room_id: '',
    class_id: 0,
    session_date: '',
    start_time: '',
    end_time: '',
    id:''
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute  // Inject ActivatedRoute to access route parameters
  ) {}

  ngOnInit(): void {
    // Get the session ID from the route parameters
    const sessionId = this.route.snapshot.paramMap.get('id');

    if (sessionId) {
      // Fetch the session data by its ID
      this.apiService.getSessionById(sessionId).subscribe((sessionData) => {
        this.session = sessionData;  // Populate the session object with the data fetched from the API
      });
    }
  }

  updateSession() {
    this.apiService.updateSessionById(this.session.id, this.session).subscribe(() => {
      this.router.navigate(['/sessions']);
    });
  }
}
