import { AppState } from './../store/app-state';
import { Store } from '@ngrx/store';
import { UsuarioModel } from './../models/UsuarioModel';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as fromUsuariosSelector from '../store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-lista-usuarios-admin',
  templateUrl: './lista-usuarios-admin.component.html',
  styleUrls: ['./lista-usuarios-admin.component.scss']
})
export class ListaUsuariosAdminComponent implements OnInit {
  //jeito 1 de buscar os usuarios
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministradores);

  listaUsuarios2: UsuarioModel[] = [];

  listaUsuarios3: UsuarioModel[] = [];

  listaUsuarios4: UsuarioModel[] = [];

  //jeito 5 de buscar os usuarios
  listaUsuarios5$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministradoresPorParametro, {perfil: 'Administrador'});

  constructor(private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    //jeito 2 de buscar os usuarios
    this.store.select(fromUsuariosSelector.getUsuariosAdministradores).subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios2 = usuarios;
    });


    //jeito 3 de buscar os usuarios
    this.store.select(fromUsuariosSelector.getUsuarios).subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios3 = usuarios.filter((filter) => filter.perfil == 'Administrador');
    });

    //jeito 4 de buscar os usuarios
    this.store.select(fromUsuariosSelector.getUsuariosAdministradoresPorParametro, {perfil: 'Administrador'}).subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios4 = usuarios;
    });
  }

}
