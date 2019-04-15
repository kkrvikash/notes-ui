import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  note: Note
  id: Number
  constructor(private noteservice: NotesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.noteservice.getNote(this.id).subscribe((note: Note) => {
          this.note = note;
        });
      }
    );

  }

  removeNote(id: Number) {
    this.noteservice.deleteNote(id).subscribe(
      () => { this.router.navigate(['/']); }
    );
  }

  back() {
    this.router.navigate(['/']);
  }

  editNote(id: Number) {
    this.router.navigate([id + '/edit']);
  }

}
