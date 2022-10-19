import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msi-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * registrarUsuario
   */
  public registrarUsuario() {
    this.message = "Vamos registrar o usuario.";
  }

}
