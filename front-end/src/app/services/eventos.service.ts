import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contador } from '../models/contador';
import { Evento } from '../models/evento';
import { AsociacionService } from './asociacion.service';

@Injectable({
  providedIn: 'root'
})

export class EventosService {

  constructor(
    private afs: AngularFirestore,
    private asociacionService: AsociacionService
  ) { }

  getCollection(): AngularFirestoreCollection<Evento> {
    return this.afs.collection<Evento>('Asociacion/AEIS/Evento');
  }

  getEventos(): Observable<Evento[]> {
    return this.getCollection().snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Evento;
        data.id = a.payload.doc.id;
        return data;
      }))
    )
  }

  addEvento(nuevoEvento: Evento) {
    let bool = true;
    this.asociacionService.getContador('Evento').subscribe(
      (contador: Contador) => {
          if(bool) {
            nuevoEvento.id = 'EVN' + contador.contador;
            this.getCollection().doc('EVN' + contador.contador).set(nuevoEvento);
            this.asociacionService.increaseContador('Evento');
            console.log('Hola');
            bool = false
          }
      }
    )
  }
}
