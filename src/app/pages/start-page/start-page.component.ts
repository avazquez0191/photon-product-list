import { Component, ViewEncapsulation } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-start-page',
  imports: [FilterComponent, ProductListComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
  standalone: true
})
export class StartPageComponent {
  genders: string[] = ['Male', 'Female'];
  categories: string[] = ['Electronics', 'Clothing', 'Home Appliances', 'Sports'];
  gender: string = "gender";
  category: string = "category";

  // Object to store selected filters dynamically
  selectedFilters: { [key: string]: string } = {};

  // Sample product data (to be filtered)
  products = [
    { name: 'Product 1', gender: 'Male', category: 'Electronics' },
    { name: 'Product 2', gender: 'Female', category: 'Clothing' },
    { name: 'Product 3', gender: 'Male', category: 'Home Appliances' },
    { name: 'Product 4', gender: 'Female', category: 'Clothing' },
    { name: 'Product 5', gender: 'Male', category: 'Sports' },
    { name: 'Product 6', gender: 'Female', category: 'Electronics' },
    { name: 'Product 7', gender: 'Male', category: 'Clothing' },
    { name: 'Product 8', gender: 'Female', category: 'Home Appliances' },
    { name: 'Product 9', gender: 'Male', category: 'Sports' },
    { name: 'Product 10', gender: 'Female', category: 'Electronics' }
  ];

  // Generic method to update filters
  handleFilterChange(filterValue: string, filterType: string) {
    this.selectedFilters = {
      ...this.selectedFilters,
      [filterType]: filterValue
    };
  }
}
