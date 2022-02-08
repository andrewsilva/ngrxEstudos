import { UsuarioModel } from './../models/UsuarioModel';
import { UsuarioService } from './../repository/UsuarioService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios:UsuarioModel[]) => {
      this.listaUsuarios = usuarios;
    })
  }

}
