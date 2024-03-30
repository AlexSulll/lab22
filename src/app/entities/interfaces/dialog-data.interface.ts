/**
 * Интерфейс для данных, получаемых из input
 */
export interface IDialogData
{
  id?: number;
  name: string | null;
  numberOfComputer: string | null;
  date: string | null;
  game: string | null;
  phone: string | null;
}

/**
 * Интерфейс для задания колонок в таблице
 */
export interface IColumn
{
  key: string,
  type: string,
  label: string,
}
