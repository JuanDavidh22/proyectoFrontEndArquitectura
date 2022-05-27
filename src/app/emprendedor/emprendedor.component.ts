import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from '../services/proyectos/proyectos.service';

@Component({
  selector: 'app-emprendedor',
  templateUrl: './emprendedor.component.html',
  styleUrls: ['./emprendedor.component.css']
})
export class EmprendedorComponent implements OnInit {

  proyectoForm: FormGroup;
  actualizarEstadoForm: FormGroup;

  constructor(
    public proyectosService: ProyectosService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.actualizarEstadoForm = this.fb.group({
      idProyecto: ['', Validators.required],
      login: ['', Validators.required],
      estado: ['', Validators.required],
    });
    this.proyectoForm = this.fb.group({
      responsable: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaLimite: ['', Validators.required],
      cantidadRecaudar: ['', Validators.required],
      cantidadRecaudada: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
      tipoProyecto: ['', Validators.required],
    }
    );
  }

  addProyecto(): void {
    this.proyectosService.addProyect(this.proyectoForm.value).subscribe(resp => {
      alert(JSON.stringify(resp));
    })
  }

  cambiarEstado(): void {
    this.proyectosService.cambiarEstado(this.actualizarEstadoForm.value).subscribe(resp => {
      alert(JSON.stringify(resp));
    })
  }
}
