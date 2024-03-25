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
  {id: '1', name: 'Сулимов Александр Дмитриевич', NumberOfComputer: '1', date: '14.03.2024', Game: 'CS2', Phone: '+7 (912) 845-76-55'},
  {id: '2', name: 'Сабиров Данияр Серикович', NumberOfComputer: '3', date: '16.03.2024', Game: 'DOTA 2', Phone: '+7 (906) 573-18-00'},
  {id: '3', name: 'Сизов Игорь Михайлович', NumberOfComputer: '2', date: '20.02.2024', Game: 'PUBG', Phone: '+7 (977) 777-77-777'},
];

const COLUMNS_SCHEMA = [
  {
    key: "name",
    type: "text",
    label: "ФИО"
  },
  {
    key: "NumberOfComputer",
    type: "number",
    label: "Номер комьютера"
  },
  {
    key: "date",
    type: "date",
    label: "Дата бронирования"
  },
  {
    key: "Game",
    type: "text",
    label: "Игра"
  },
  {
    key: "Phone",
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
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource: any = USER_DATA;
  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u:any) => u.id !== id);
  }
  constructor(public dialog: MatDialog) {
  }
  openDialog(){
    this.dialog.open(DialogWindowComponent, {width: '550px'});
  }
}
