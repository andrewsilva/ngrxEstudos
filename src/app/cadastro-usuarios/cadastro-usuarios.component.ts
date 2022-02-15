import { Store } from '@ngrx/store';
import { UsuarioService } from './../repository/UsuarioService';
import { UsuarioModel } from './../models/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app-state';
import * as fromUsuarioAction from '../store/usuarios/usuarios.actions';
@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = {id: 0, nome: '', idade: 0, perfil: ''};

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addUsuario(){
    if(this.model.id == 0){
      this.store.dispatch(fromUsuarioAction.CreateUsuario({payload: this.model}));
    }else{
      this.store.dispatch(fromUsuarioAction.UpdateUsuario({payload: this.model}));
    }
  }

}
