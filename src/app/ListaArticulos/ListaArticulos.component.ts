import { Component, OnInit } from '@angular/core';

interface Item { //interfaz de los objetos a añadir
  name: string;
  quantity: number;
  price: number;
  description: string;
}

@Component({
  selector: 'app-ListaArticulos',
  templateUrl: './ListaArticulos.component.html',
  styleUrls: ['./ListaArticulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  invoice: {items: Item[] };
  newItem: Item = { name: '', quantity: 1, price: 0, description: '' };//Objeto para crear items
  
  constructor() { 

    this.invoice = {
      items: [//Objetos que estarán añadidos por defecto
  {
    name: 'Telefono',
    quantity: 1,
    price: 450,
    description: 'Último modelo',
  },
     ],
};

  }

  ngOnInit() {}

  getTotal(): number {//Función para calcular el total una vez añadidos los objetos
    let total = 0;
    for (let i = 0; i < this.invoice.items.length; i++) {
      total += this.invoice.items[i].price * this.invoice.items[i].quantity;
    }
    return total;
  }


  removeItem(index: number) { //Función para borrar objetos de la lista
    this.invoice.items.splice(index, 1);
  }

  addItem() { //Función para añadir objetos de la lista
    this.invoice.items.push({ ...this.newItem });
    this.newItem = {
      name: '',
      description: '',
      price: 0,
      quantity: 1,
    };
  }

}
