import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from '@angular/material/dialog';
import { DialogWindowComponent } from "./entities/components/dialog-window/dialog-window.component";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { IColumn, IDialogData } from "./entities/interfaces/dialog-data.interface";
import { DateFormatPipe } from "./entities/pipes/date-format.pipe";
import { PhoneFormatPipe } from "./entities/pipes/phone-format.pipe";

const USER_DATA: IDialogData[] = [
  {id: 1, name: 'Сулимов Александр Дмитриевич', numberOfComputer: '1', date: '03/14/2024', game: 'CS2', phone: '9128457655'},
  {id: 2, name: 'Сабиров Данияр Серикович', numberOfComputer: '3', date: '03/16/2024', game: 'DOTA 2', phone: '9065731800'},
  {id: 3, name: 'Сизов Игорь Михайлович', numberOfComputer: '2', date: '02/20/2024', game: 'PUBG', phone: '9777777777'},
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
  imports: [CommonModule, MatButtonModule, MatTableModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, DateFormatPipe, PhoneFormatPipe],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public displayedColumns: string[] = COLUMNS_SCHEMA.map((colum: IColumn) => colum.key);
  public dataSource: any = USER_DATA;
  /**
   * Функция удаления строки таблицы по id
   * @param id - id элемента
   */
  public removeRow(id: number) {
    this.dataSource = this.dataSource.filter((element:any) => element.id !== id);
  }
  constructor(
    public dialog: MatDialog
  ) {}
  openDialog(): void {
    const DIALOGREF: MatDialogRef<DialogWindowComponent> = this.dialog.open(DialogWindowComponent, {width: '550px'});
    DIALOGREF.afterClosed().subscribe(result => {
      if (result) {
        const VALUE = {id: this.dataSource[this.dataSource.length - 1].id + 1, ...result}
        this.dataSource = [...this.dataSource,VALUE];
      }
    });
  }
}
