import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[];
  constructor(private noteservice: NotesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.notes = [];
  }

  ngOnInit() {
    this.noteservice.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }

  removeNote(id: Number) {
    this.noteservice.deleteNote(id).subscribe(
      () => { this.ngOnInit(); }
    );
  }

  view(id: Number) {

    this.router.navigate(['note/' + id]);
  }

  editNote(id: Number) {
    this.router.navigate([id + '/edit']);
  }

  addNote() {
    this.router.navigate(['new']);
  }

}
