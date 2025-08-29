import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ProductComponent} from './component/products/products.component';

export const routes: Routes = [
    {
        path: 'product',
        component: ProductComponent
    }
];
