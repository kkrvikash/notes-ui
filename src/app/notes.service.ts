import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note.model';


@Injectable()
export class NotesService {

    private notesUrl = "http://localhost:8080/api/notes";

    constructor(private http: HttpClient) {

    }

    getNotes() {
        return this.http.get(this.notesUrl);
    }

    getNote(id: Number) {
        const url = `${this.notesUrl}/${id}`;
        return this.http.get(url);
    }

    deleteNote(id: Number): Observable<{}> {
        const url = `${this.notesUrl}/${id}`;
        return this.http.delete(url);
    }

    addNote(note: Note) {
        return this.http.post<Note>(this.notesUrl, note)

    }

    updateNote(id: Number, note: Note): Observable<{}> {
        const url = `${this.notesUrl}/${id}`;
        return this.http.put(url, note);
    }
}