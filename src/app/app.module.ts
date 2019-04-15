import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './notes.service';
import { AddNoteComponent } from './add-note/add-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NoteViewComponent } from './note-view/note-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    AddNoteComponent,
    NoteViewComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
