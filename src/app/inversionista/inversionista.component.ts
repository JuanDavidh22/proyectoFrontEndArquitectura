import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DonacionService } from '../services/donacion/donacion.service';
import { ProyectosService } from '../services/proyectos/proyectos.service';


@Component({
  selector: 'app-inversionista',
  templateUrl: './inversionista.component.html',
  styleUrls: ['./inversionista.component.css']
})
export class InversionistaComponent implements OnInit {

  donacionForm: FormGroup;
  donacionPorUsuarioForm: FormGroup;
  proyectos: any[];
  proyectosPorUsuario: any[];

  constructor(
    public proyectoService : ProyectosService,
    public donacionService: DonacionService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.donacionForm = this.fb.group({
      fecha: ['', Validators.required],
      idProyecto: ['', Validators.required],
      login: ['', Validators.required],
      valorDonar: ['', Validators.required],
    });
    this.donacionPorUsuarioForm = this.fb.group({
      login: ['', Validators.required]
    })
    this.proyectoService.getAllProyects().subscribe(response =>{this.proyectos = response} );
  };

  addDonacion(): void {
    this.donacionService.addDonacion(this.donacionForm.value).subscribe(resp =>{
      alert(JSON.stringify(resp));
    });
  }

  getDonacionPorUsuario(): void {
    this.donacionService.getDonacionPorUsuario(this.donacionPorUsuarioForm.value.login).subscribe(resp =>{
      this.proyectosPorUsuario = resp;
      console.log(resp);
    });
  }
}
