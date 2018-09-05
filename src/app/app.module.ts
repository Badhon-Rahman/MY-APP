import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { MatButtonModule,MatTableModule,MatCheckboxModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import {DndModule} from 'ng2-dnd';



@NgModule({
  declarations: [
    AppComponent,
    ModalBasicComponent,
    LoginComponent,
    RegesterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
