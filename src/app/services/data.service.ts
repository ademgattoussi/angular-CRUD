import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // <-- Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // rooms
  getRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms`);
  }

  getRoomById(roomId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms/${roomId}`);
  }

  addRoom(room: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/rooms`, room);
  }

  updateRoomById(roomId: string, room: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/rooms/${roomId}`, room);
  }

  deleteRoomById(roomId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/rooms/${roomId}`);
  }

  // Teachers
  getTeachers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teachers`);
  }

  addTeacher(teacher: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/teachers`, teacher);
  }

  updateTeacherById(teacherId: string, teacher: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/teachers/${teacherId}`, teacher);
  }

  deleteTeacherById(teacherId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/teachers/${teacherId}`);
  }

  // Subjects
  getSubjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/subjects`);
  }

  addSubject(subject: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/subjects`, subject);
  }

  updateSubjectById(subjectId: string, subject: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/subjects/${subjectId}`, subject);
  }

  deleteSubjectById(subjectId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/subjects/${subjectId}`);
  }

  // Classes
  getClasses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/classes`);
  }

  addClass(clazz: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/classes`, clazz);
  }

  updateClassById(classId: string, clazz: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/classes/${classId}`, clazz);
  }

  deleteClassById(classId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/classes/${classId}`);
  }

  // Sessions
  getSessions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sessions`);
  }

  addSession(session: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/sessions`, session);
  }

  updateSessionById(sessionId: string, session: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/sessions/${sessionId}`, session);
  }

  deleteSessionById(sessionId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/sessions/${sessionId}`);
  }

  // Students
  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }

  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/students`, student);
  }

  updateStudentById(studentId: string, student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/students/${studentId}`, student);
  }

  deleteStudentById(studentId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/students/${studentId}`);
  }
}
