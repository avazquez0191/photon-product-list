import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilterComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {

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
    { name: 'Product 5', gender: 'Male', category: 'Sports' }
  ];

  // Generic method to update filters
  handleFilterChange(filterValue: string, filterType: string) {
    this.selectedFilters = {
      ...this.selectedFilters,
      [filterType]: filterValue
    };
  }
}
