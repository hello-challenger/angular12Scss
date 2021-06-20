import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';

//Variable RouterModule
export const ROUTES : Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFountComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFountComponent,
    TodoComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SingleTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
