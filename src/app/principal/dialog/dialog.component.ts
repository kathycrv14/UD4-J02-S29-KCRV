import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Products } from 'src/app/models/products';
import { TableComponent } from '../table/table.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(public dialog: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

/*   agregarProductos: Products[] =[{codigo: '', descripcion: '', precio:''}]; */

  ngOnInit() {
  }


  /* confirmar(){

  }*/

  cancelar(): void {
    this.dialog.close();
  }
  confirmar(): void {
    this.dialog.close(this.data);
  }
}
