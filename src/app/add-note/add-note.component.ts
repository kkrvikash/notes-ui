import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { NotesService } from '../notes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Note } from '../note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  id: number;
  editMode = false;
  note: Note;

  title: String;
  content: String;

  @ViewChild('f') addNoteForm: NgForm;
  constructor(private notesService: NotesService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] > 0;
      }
    );
    this.initForm();
    console.log(this.id)
    console.log(this.editMode)
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (!this.editMode) {
      this.notesService.addNote(form.value).subscribe();
    }
    else {
      this.notesService.updateNote(this.id, form.value).subscribe();
    }

    this.addNoteForm.reset();
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  initForm() {
    if (this.editMode) {
      this.notesService.getNote(this.id).subscribe((note: Note) => {
        this.note = note;
        console.log(this.note.title);
        this.title = this.note.title;
        this.content = this.note.content;
      });
    }
  }

}
