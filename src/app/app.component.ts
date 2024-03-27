import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from '@angular/material/dialog';
import { DialogWindowComponent } from "./entities/components/dialog-window/dialog-window.component";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";

const USER_DATA = [
  {id: '1', name: 'Сулимов Александр Дмитриевич', numberOfComputer: '1', date: '14.03.2024', game: 'CS2', phone: '+7(912)845-76-55'},
  {id: '2', name: 'Сабиров Данияр Серикович', numberOfComputer: '3', date: '16.03.2024', game: 'DOTA 2', phone: '+7(906)573-18-00'},
  {id: '3', name: 'Сизов Игорь Михайлович', numberOfComputer: '2', date: '20.02.2024', game: 'PUBG', phone: '+7(977)777-77-777'},
];

const COLUMNS_SCHEMA = [
  {
    key: "name",
    type: "text",
    label: "ФИО"
  },
  {
    key: "numberOfComputer",
    type: "number",
    label: "Номер комьютера"
  },
  {
    key: "date",
    type: "date",
    label: "Дата бронирования"
  },
  {
    key: "game",
    type: "text",
    label: "Игра"
  },
  {
    key: "phone",
    type: "text",
    label: "Номер телефона"
  },
  {
    key: "button",
    type: "button",
    label: "Удалить запись"
  }
]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  public dataSource: any = USER_DATA;
  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u:any) => u.id !== id);
  }
  constructor(public dialog: MatDialog) {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWindowComponent, {width: '550px'});
    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //console.log(result);
      this.dataSource = [...this.dataSource,result];
    });
  }
}
