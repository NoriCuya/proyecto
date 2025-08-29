import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../products/products.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Output() addProduct = new EventEmitter<Product>();

  name: string = '';
  price: number | null = null;
  image: string = '';
  description: string = '';
  category: string = 'Fruta'; // valor por defecto
  quantity: number | null = null;

  onSubmit() {
    if (!this.name || !this.price || !this.image || !this.description || !this.category || !this.quantity) {
      alert('⚠️ Por favor, completa todos los campos');
      return;
    }

    const newProduct: Product = {
      name: this.name,
      price: this.price,
      image: this.image,
      description: this.description,
      category: this.category,
      quantity: this.quantity,
    };

    this.addProduct.emit(newProduct);

    // limpiar inputs
    this.name = '';
    this.price = null;
    this.image = '';
    this.description = '';
    this.category = 'Fruta';
    this.quantity = null;
  }
}
