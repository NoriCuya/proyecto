import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductListComponent } from './component/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductFormComponent, ProductListComponent], // 👈 Importa aquí
  templateUrl: './app.component.html', // 👈 Usa el html externo
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
}
