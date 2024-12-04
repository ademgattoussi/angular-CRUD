import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-rooms-create',
  standalone: true,
  templateUrl: './rooms-create.component.html',
  styleUrls: ['./rooms-create.component.css'],
  imports: [FormsModule, RouterModule]
})
export class RoomsCreateComponent {
  room = {
    room_id: '',
    room_name: '',
    capacity: 0,
    building: '',
    floor: 0
  };

  constructor(private apiService: ApiService, private router: Router) {}

  addRoom() {
    this.apiService.addRoom(this.room).subscribe(() => {
      this.router.navigate(['/rooms']);
    });
  }
}
