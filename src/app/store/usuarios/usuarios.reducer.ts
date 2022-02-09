import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { UsuarioModel } from './../../models/UsuarioModel';

import * as fromUsuariosActions from './usuarios.actions';

export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel;
  error: string | '';
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: '',
};

const _usuariosReducer = createReducer(
  initialState,
  on(fromUsuariosActions.LoadUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsuariosActions.LoadUsuariosFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(fromUsuariosActions.LoadUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '',
  })),
  on(fromUsuariosActions.LoadUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(fromUsuariosActions.CreateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '',
  })),
  on(fromUsuariosActions.CreateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(fromUsuariosActions.UpdateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row)=>{
      if(row.id == payload.id){
        return payload;
      }
      else{
        return row;
      }
    }),
    error: '',
  })),
  on(fromUsuariosActions.UpdateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(fromUsuariosActions.DeleteUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((filter)=> filter.id != payload),
    error: '',
  })),
  on(fromUsuariosActions.DeleteUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

);

export function usuariosReducer(state = initialState, action: Action) {
  return _usuariosReducer(state, action);
}
