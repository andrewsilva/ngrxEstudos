import { UsuarioService } from './../repository/UsuarioService';
import { UsuarioModel } from './../models/UsuarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = {id: 0, nome: '', idade: 0, perfil: ''};

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  addUsuario(){
    if(this.model.id == 0){
      this.usuarioService.addUsuario(this.model).subscribe();
    }else{

    }
  }

}
