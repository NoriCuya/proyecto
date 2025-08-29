import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../component/products/products.model';

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: Product[] | null | undefined, search: string): Product[] {
    // Si no hay lista de productos, devolvemos vacío para evitar errores
    if (!products) return [];

    // Si no hay búsqueda, devolvemos todos los productos
    if (!search) return products;

    // Normalizamos la búsqueda
    const searchLower = search.toLowerCase();

    // Filtramos por nombre o categoría
    return products.filter(p =>
      p.name?.toLowerCase().includes(searchLower) ||
      p.category?.toLowerCase().includes(searchLower)
    );
  }
}
