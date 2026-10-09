import { Component, computed, inject } from '@angular/core';
import { SavingsService } from '../../services/savings.service';
import { MatCardModule } from '@angular/material/card';
import { SavingItem } from '../saving-item/saving-item';

@Component({
  imports: [MatCardModule, SavingItem],
  selector: 'savings-list',
  styleUrl: './savings-list.scss',
  templateUrl: './savings-list.html',
})
export class SavingsList {
  #savingsService = inject(SavingsService);

  protected savingsList = computed(() => this.#savingsService.savingsList());

  protected deleteItem(id: number) {
    this.#savingsService.deleteSaving(id);
  }
}
