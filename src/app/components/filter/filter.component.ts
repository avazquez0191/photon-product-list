import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() filterType!: string;
  @Input() filterValues!: string[];
  @Output() onFilterChange = new EventEmitter<string>();

  selectedFilter: string = '';

  // Handle filter selection
  onSelect(filterValue: string) {
    if (this.selectedFilter === filterValue) {
      this.selectedFilter = 'All';
    } else {
      this.selectedFilter = filterValue;
    }

    this.onFilterChange.emit(this.selectedFilter);
  }
}
