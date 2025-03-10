import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true
})
export class ProductListComponent {
  @Input() products!: Product[];
  @Input() selectedFilters!: { [key: string]: string | null };

  get filteredProducts() {
    return this.products.filter((product: Product) => {
      return Object.keys(this.selectedFilters).every((f: string) => {
        return !this.selectedFilters[f] || this.selectedFilters[f] === 'All' || this.selectedFilters[f] === product[f as keyof Product];
      });
    });
  }
}

interface Product {
  name: string; 
  gender: string; 
  category: string
}