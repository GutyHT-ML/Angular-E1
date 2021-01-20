import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PruebaComponent } from './prueba/prueba.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    PruebaComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
