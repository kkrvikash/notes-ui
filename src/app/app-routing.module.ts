import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NgModule } from '@angular/core';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteViewComponent } from './note-view/note-view.component';
const appRoutes: Routes = [
    { path: '', component: NotesListComponent, runGuardsAndResolvers: 'always' },
    { path: 'new', component: AddNoteComponent, runGuardsAndResolvers: 'always' },
    { path: ':id/edit', component: AddNoteComponent, runGuardsAndResolvers: 'always' },
    { path: 'note/:id', component: NoteViewComponent, runGuardsAndResolvers: 'always' }



];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}