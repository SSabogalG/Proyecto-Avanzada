import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() visible: boolean;
  @Input() titulo: string ;
  @Input() contenido: string ;


  constructor() {
    this.visible = false;
    this.titulo = '';
    this.contenido= '';
  }

  mostrar() {
    this.visible = true;
  }

  cerrar() {
    this.visible = false;
  }
}
