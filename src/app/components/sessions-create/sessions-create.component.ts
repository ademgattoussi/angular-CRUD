import { Component } from '@angular/core';
import { ApiService } from '../../services/data.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sessions-create',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './sessions-create.component.html',
  styleUrl: './sessions-create.component.css'
})
export class SessionsCreateComponent {
  session = {
    session_id: '',
    subject_id: '',
    teacher_id: 0,
    room_id: '',
    class_id: 0,
    session_date: "",
    start_time: "",
    end_time: ""
  };

  constructor(private apiService: ApiService, private router: Router) {}

  addSession() {
    this.apiService.addSession(this.session).subscribe(() => {
      this.router.navigate(['/sessions']);
    });
  }
}