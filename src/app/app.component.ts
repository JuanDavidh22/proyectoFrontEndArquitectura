import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DonacionService } from './services/donacion/donacion.service';
import { UsuariosService } from './services/usuarios/usuarios.service';
import { ProyectosService } from './services/proyectos/proyectos.service';
import { EstadisticasService } from './services/estadisticas/estadisticas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuarioForm: FormGroup;
  usuarios: any;

  constructor(
    public fb: FormBuilder,
    public donacionService: DonacionService,
    public usuariosService: UsuariosService,
    public proyectosService: ProyectosService,
    public estadisticasService: EstadisticasService
  ) {

  }
  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      documento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],

     
    }
    );

    this.usuariosService.getAllUsuarios().subscribe(response =>{this.usuarios= response
      console.log(this.usuarios);} );
  }

  guardarUsuario(): void {
    this.usuariosService.addUsuario(this.usuarioForm.value).subscribe(resp => {
      this.usuarioForm.reset();
    },
      error => { console.error(error) }
    )
  }
}
