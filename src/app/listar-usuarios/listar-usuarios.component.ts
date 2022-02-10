import { AppState } from './../store/app-state';
import { UsuarioModel } from './../models/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUsuariosAction from '../store/usuarios/usuarios.actions';
import * as fromUsuariosSelector from '../store/usuarios/usuarios.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios);

  constructor(
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }

}
