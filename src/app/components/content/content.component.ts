import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  inauguracao: string;
  endereco: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: 'Lago Igapó', inauguracao: '10/12/1959', endereco: 'Rua Visconde de Guarapuava'},
  {nome: 'Jardim Botânico', inauguracao: '30/01/2006', endereco: 'Av. dos Expedicionários, 1999 - Vivendas do Arvoredo'},
  {nome: 'Museu Histórico', inauguracao: '18/09/1970', endereco: 'R. Benjamin Constant, 900 - Centro, Londrina - PR, 86010-350'}
];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'inauguracao', 'endereco'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
