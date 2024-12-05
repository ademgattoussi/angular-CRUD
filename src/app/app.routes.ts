import { Routes } from '@angular/router';
import { RoomsShowComponent } from './components/rooms-show/rooms-show.component';
import { RoomsCreateComponent } from './components/rooms-create/rooms-create.component';
import { RoomsUpdateComponent } from './components/rooms-update/rooms-update.component';
import { ClassesShowComponent } from './components/classes-show/classes-show.component';
import { ClassesCreateComponent } from './components/classes-create/classes-create.component';
import { ClassesUpdateComponent } from './components/classes-update/classes-update.component';
import { SessionsShowComponent } from './components/sessions-show/sessions-show.component';
import { SessionsCreateComponent } from './components/sessions-create/sessions-create.component';
import { SessionsUpdateComponent } from './components/sessions-update/sessions-update.component';
import { StudentsShowComponent } from './components/students-show/students-show.component';
import { StudentsCreateComponent } from './components/students-create/students-create.component';
import { StudentsUpdateComponent } from './components/students-update/students-update.component';
import { SubjectsShowComponent } from './components/subjects-show/subjects-show.component';
import { SubjectsCreateComponent } from './components/subjects-create/subjects-create.component';
import { SubjectsUpdateComponent } from './components/subjects-update/subjects-update.component';
import { TeachersShowComponent } from './components/teachers-show/teachers-show.component';
import { TeachersCreateComponent } from './components/teachers-create/teachers-create.component';
import { TeachersUpdateComponent } from './components/teachers-update/teachers-update.component';

export const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomsShowComponent },
  { path: 'rooms-create', component: RoomsCreateComponent },
  { path: 'rooms-update/:id', component: RoomsUpdateComponent },
  { path: 'classes', component: ClassesShowComponent },
  { path: 'classes-create', component: ClassesCreateComponent },
  { path: 'classes-update/:id', component: ClassesUpdateComponent },
  { path: 'sessions', component: SessionsShowComponent },
  { path: 'sessions-create', component: SessionsCreateComponent },
  { path: 'sessions-update/:id', component: SessionsUpdateComponent },
  { path: 'students', component: StudentsShowComponent },
  { path: 'students-create', component: StudentsCreateComponent },
  { path: 'students-update/:id', component: StudentsUpdateComponent },
  { path: 'subjects', component: SubjectsShowComponent },
  { path: 'subjects-create', component: SubjectsCreateComponent },
  { path: 'subjects-update/:id', component: SubjectsUpdateComponent },
  { path: 'teachers', component: TeachersShowComponent },
  { path: 'teachers-create', component: TeachersCreateComponent },
  { path: 'teachers-update/:id', component: TeachersUpdateComponent },

];
