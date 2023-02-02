import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public lista: Products[]=[]

  constructor(private router: Router,private dialog: MatDialog){}
    
  redireccion = '';

/*   agregarProductos(codigo: string, descripcion: string, precio: string) {
    this.lista.push({codigo, descripcion, precio});
  } */

  anadir(): void{
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {codigo: '', descripcion: '', precio: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.lista.push(result);
      }
    });
  }

  eliminar(codigo: string){
    this.lista = this.lista.filter(item => item.codigo !== codigo);
  }
}
