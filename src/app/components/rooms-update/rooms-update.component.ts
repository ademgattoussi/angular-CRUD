import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms-update',
  standalone: true,
  templateUrl: './rooms-update.component.html',
  styleUrls: ['./rooms-update.component.css'],
  imports: [FormsModule, RouterModule]
})
export class RoomsUpdateComponent implements OnInit {
  room = {
    room_id: '',
    room_name: '',
    capacity: 0,
    building: '',
    floor: 0,
    id: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute  // Inject ActivatedRoute to access route parameters
  ) {}

  ngOnInit(): void {
    // Get the room ID from the route parameters
    const roomId = this.route.snapshot.paramMap.get('id');

    if (roomId) {
      // Fetch the room data by its ID
      this.apiService.getRoomById(roomId).subscribe((roomData) => {
        this.room = roomData;  // Populate the room object with the data fetched from the API
      });
    }
  }

  updateRoom() {
    this.apiService.updateRoomById(this.room.id, this.room).subscribe(() => {
      this.router.navigate(['/rooms']);
    });
  }
}
