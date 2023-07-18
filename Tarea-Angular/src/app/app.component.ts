import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tarea-Angular';
  showList:boolean = false;
  productos: Producto[] = [
    { costo: 9550, nombre: 'Remera' },
    { costo: 8000, nombre: 'Remera Croc Top' },
    { costo: 18000, nombre: 'Jean Cargo Negro' },
    { costo: 20000, nombre: 'Buzo oversize' },
    { costo: 3500, nombre: 'Medias' },
    { costo: 3500, nombre: 'Guantes nike' }
  ];
  changeVisibility(){
    this.showList = !this.showList;
  }
  cambiar(){}
}

interface Producto {
  costo: number;
  nombre: string;
}






