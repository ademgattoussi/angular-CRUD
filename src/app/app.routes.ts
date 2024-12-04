import { Routes } from '@angular/router';
import { RoomsShowComponent } from './components/rooms-show/rooms-show.component';
import { RoomsCreateComponent } from './components/rooms-create/rooms-create.component';
import { RoomsUpdateComponent } from './components/rooms-update/rooms-update.component';

export const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomsShowComponent },
  { path: 'rooms-create', component: RoomsCreateComponent },
  { path: 'rooms-update/:id', component: RoomsUpdateComponent },

];
