import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from './../../repository/UsuarioService';
import * as fromUsuariosActions from './usuarios.actions';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  loadUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosActions.UsuariosTypesAction.LOAD_USUARIOS),
      exhaustMap(() =>
        this.usuarioService.getUsuarios().pipe(
          map((payload) =>
            fromUsuariosActions.LoadUsuariosSuccess({ payload })
          ),
          catchError((error) =>
            of(fromUsuariosActions.LoadUsuariosFail({ error }))
          )
        )
      )
    )
  );

  loadUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosActions.UsuariosTypesAction.LOAD_USUARIO),
      exhaustMap((record: any) =>
        this.usuarioService.getUsuario(record.payload).pipe(
          map((payload) => fromUsuariosActions.LoadUsuarioSuccess({ payload })),
          catchError((error) =>
            of(fromUsuariosActions.LoadUsuarioFail({ error }))
          )
        )
      )
    )
  );

  createUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosActions.UsuariosTypesAction.CREATE_USUARIO),
      exhaustMap((record: any) =>
        this.usuarioService.addUsuario(record.payload).pipe(
          map((payload) =>
            fromUsuariosActions.CreateUsuarioSuccess({ payload })
          ),
          catchError((error) =>
            of(fromUsuariosActions.CreateUsuarioFail({ error }))
          )
        )
      )
    )
  );

  updateUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosActions.UsuariosTypesAction.UPDATE_USUARIO),
      exhaustMap((record: any) =>
        this.usuarioService.updateUsuario(record.payload).pipe(
          map((payload) =>
            fromUsuariosActions.UpdateUsuarioSuccess({ payload })
          ),
          catchError((error) =>
            of(fromUsuariosActions.UpdateUsuarioFail({ error }))
          )
        )
      )
    )
  );

  deleteUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosActions.UsuariosTypesAction.DELETE_USUARIO),
      exhaustMap((record: any) =>
        this.usuarioService.deleteUsuario(record.payload).pipe(
          map(() =>
            fromUsuariosActions.DeleteUsuarioSuccess({
              payload: record.payload,
            })
          ),
          catchError((error) =>
            of(fromUsuariosActions.DeleteUsuarioFail({ error }))
          )
        )
      )
    )
  );
}
