import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MainScreenComponent } from './components/layouts/main-screen/main-screen.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MaterialComponentsModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EstudiantesModule } from './components/estudiantes/estudiantes.module';
import { PageNotFoundComponent } from './components/layouts/page-not-found/page-not-found.component';
import { AutoridadesModule } from './components/autoridades/autoridades.module';
import { AjustesModule } from './components/ajustes/ajustes.module';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainScreenComponent,
    PageNotFoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firabase),
    FlatpickrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    FormsModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    EstudiantesModule,
    AutoridadesModule,
    AjustesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
