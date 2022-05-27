import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuarios: any[];

  constructor(
    public fb: FormBuilder,
    public usuariosService: UsuariosService
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
    this.usuariosService.getAllUsuarios().subscribe(response =>{this.usuarios = response} );
  }

  guardarUsuario(): void {
    this.usuariosService.addUsuario(this.usuarioForm.value).subscribe(resp => {
      console.log(this.usuarioForm.value);
    })
    this.usuarios.push(this.usuarioForm.value);
  }

}
