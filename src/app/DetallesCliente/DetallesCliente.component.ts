import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer { //Interfaz con los datos de los clientes
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-DetallesCliente',
  templateUrl: './DetallesCliente.component.html',
  styleUrls: ['./DetallesCliente.component.css']
})
export class DetallesClienteComponent implements OnInit {
  editingCustomerField: string = ''; //Variable para editar los campos
  invoice: { customer: Customer };  
  editingField: string = '';
  showImage = true; //La imagen por defecto visible
  imageUrl = 'http://metaware.github.io/angular-invoicing/images/metaware_logo.png'; //Url de la imagen

  constructor() { 

    this.invoice = {//Cliente por defecto de la factura
      customer: {
        name: 'Victor Mena',
        address: 'Segundo Flores, 5',
        city: 'Mocejon',
        state: 'Toledo',
        zip: '45270',
        },
    }; 

  }
  
  ngOnInit() {
  }

  editCustomerField(field: string) { //Funcion para editar el cliente
    this.editingCustomerField = field;
  }

  saveCustomer() { //Funcion para guardar el nuevo cliente
    this.editingCustomerField = '';
  }

  hideImage() {  //Funcion para ocultar la imagen
    this.showImage = !this.showImage;
  }

  changeImage() {//Funcion para cargar una nueva imagen 
    const fileInput = document.createElement('input');//Creo nuevo archivo de entrada
    fileInput.type = 'file';//Se establece el tipo en file
    fileInput.accept = 'image/*';//solo se pueden seleccionar imagenes
    fileInput.addEventListener('change', () => {//Cuando se selecciona el archivo se ejecuta
      const file = fileInput.files?.item(0);//Se obtiene el archivo seleccionado
      if (file) {
        const reader = new FileReader();//Se crea nuevo objeto filereader
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => {
          this.imageUrl = reader.result as string;
        });
      }
    });
    fileInput.click();//Muestra el dialogo de seleccion de archivos
  }
}
