import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadisticasService } from '../services/estadisticas/estadisticas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  valorEsperadoPromedio : any;
  valorPromedioFinanciado : any;
  constructor(
    public estadisticasService : EstadisticasService
  ) { }

  ngOnInit(): void {
   this.getValorPromedioFinanciado()
   this.getValorEsperadoPromedio()
  }

  getValorPromedioFinanciado() {
    this.estadisticasService.getValorPromedioFinanciado().subscribe(resp => 
      this.valorPromedioFinanciado = JSON.parse(JSON.stringify(resp)).valorPromedioFinanciado
    );
  }
  getValorEsperadoPromedio() {
    this.estadisticasService.getValorEsperadoPromedio().subscribe(resp => 
      this.valorEsperadoPromedio = JSON.parse(JSON.stringify(resp)).ValorEsperadoPromedio
    );
  }
}
