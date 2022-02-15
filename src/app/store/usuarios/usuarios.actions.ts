import { UsuarioModel } from '../../models/UsuarioModel';
import { createAction, props } from '@ngrx/store';

export const enum UsuariosTypesAction {
  LOAD_USUARIOS = '[LOAD_USUARIOS] Load Usuarios',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] Load Usuarios Success',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] Load Usuarios Fail',

  LOAD_USUARIO = '[LOAD_USUARIO] Load Usuario',
  LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] Load Usuario Success',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] Load Usuario Fail',

  CREATE_USUARIO = '[CREATE_USUARIO] Create Usuario',
  CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] Create Usuario Success',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] Create Usuario Fail',

  UPDATE_USUARIO = '[UPDATE_USUARIO] Update Usuario',
  UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] Update Usuario Success',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] Update Usuario Fail',

  DELETE_USUARIO = '[DELETE_USUARIO] Delete Usuario',
  DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] Delete Usuario Success',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] Delete Usuario Fail',
}

//load usuarios
export const LoadUsuarios = createAction(UsuariosTypesAction.LOAD_USUARIOS);

export const LoadUsuariosSuccess = createAction(
  UsuariosTypesAction.LOAD_USUARIOS_SUCCESS,
  props<{ payload: UsuarioModel[] }>()
);

export const LoadUsuariosFail = createAction(
  UsuariosTypesAction.LOAD_USUARIOS_FAIL,
  props<{ error: string }>()
);

//load ussuario
export const LoadUsuario = createAction(
  UsuariosTypesAction.LOAD_USUARIO,
  props<{ payload: number }>()
);

export const LoadUsuarioSuccess = createAction(
  UsuariosTypesAction.LOAD_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioFail = createAction(
  UsuariosTypesAction.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
);

//create usuario
export const CreateUsuario = createAction(
  UsuariosTypesAction.CREATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioSuccess = createAction(
  UsuariosTypesAction.CREATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioFail = createAction(
  UsuariosTypesAction.CREATE_USUARIO_FAIL,
  props<{ error: string }>()
);

//update usuario
export const UpdateUsuario = createAction(
  UsuariosTypesAction.UPDATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioSuccess = createAction(
  UsuariosTypesAction.UPDATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioFail = createAction(
  UsuariosTypesAction.UPDATE_USUARIO_FAIL,
  props<{ error: string }>()
);

//delete usuario
export const DeleteUsuario = createAction(
  UsuariosTypesAction.DELETE_USUARIO,
  props<{ payload: number }>()
);

export const DeleteUsuarioSuccess = createAction(
  UsuariosTypesAction.DELETE_USUARIO_SUCCESS,
  props<{ payload: number }>()
);

export const DeleteUsuarioFail = createAction(
  UsuariosTypesAction.DELETE_USUARIO_FAIL,
  props<{ error: string }>()
);
