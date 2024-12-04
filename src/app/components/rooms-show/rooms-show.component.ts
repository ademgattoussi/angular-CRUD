import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rooms-show',
  templateUrl: './rooms-show.component.html',
  styleUrls: ['./rooms-show.component.css']
})
export class RoomsShowComponent implements OnInit {
  rooms: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchRooms();
  }

  updateRoom(room_id: any) {
    this.router.navigate(['/rooms-update', room_id]);
  }
  

  fetchRooms() {
    this.apiService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  deleteRoom(id : any) {
    this.apiService.deleteRoomById(id).subscribe(() => {
      this.fetchRooms();
    });
  }
}
