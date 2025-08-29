import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- para ngModel
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../products/products.model';
import { FilterProductsPipe } from '../../pipes/filter.pipe'; // <-- importa tu pipe

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductFormComponent, FilterProductsPipe], // <-- lo añades aquí
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  searchTerm: string = ''; // <-- va dentro de la clase

  products: Product[] = [
    { name: 'Manzana', price: 3.5, image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg', description: 'Fruta roja y dulce', category: 'Fruta', quantity: 10 },
    { name: 'Banana', price: 2.0, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg', description: 'Fruta amarilla rica en potasio', category: 'Fruta', quantity: 20 },
    { name: 'Naranja', price: 4.0, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg', description: 'Cítrico lleno de vitamina C', category: 'Fruta', quantity: 15 }
  ];

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
