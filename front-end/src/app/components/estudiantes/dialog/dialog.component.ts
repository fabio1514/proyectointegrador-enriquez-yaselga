import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiante } from 'src/app/models/estudiante';
import { Router } from '@angular/router';
import { Timestamp } from '@firebase/firestore-types';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Output() public estudianteAEditarEmitter = new EventEmitter();
  public estudianteAEditar: Estudiante;
  public estudianteAAfiliar: Estudiante;
  public dateString:String = "";

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public estudiante: Estudiante
  ) {}

  ngOnInit() {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  actualizarEstudiante() {
    this.estudianteAEditar = Object.assign([],this.estudiante);
    this.dialogRef.close();
    this.router.navigateByUrl('/main/actualizar', { state: this.estudianteAEditar });
  }

  afiliarEstudiante() {
    this.estudianteAAfiliar = Object.assign([],this.estudiante);
    this.dialogRef.close();
    this.router.navigateByUrl('/main/afiliar', { state: this.estudianteAEditar });
  }

}