import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule,MatTableModule,MatCheckboxModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import {DndModule} from 'ng2-dnd';


@NgModule({
  declarations: [
    AppComponent,
    ModalBasicComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    NgbModule.forRoot(),
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    DndModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
