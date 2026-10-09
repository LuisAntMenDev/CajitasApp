import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SavingsList } from '../../components/savings-list/savings-list';
import { AddSaving } from '../../components/add-saving/add-saving';
import { SavingsService } from '../../services/savings.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [MatCardModule, SavingsList, AddSaving, CurrencyPipe],
  selector: 'app-savings-page',
  styleUrl: './savings-page.scss',
  templateUrl: './savings-page.html',
})
export class SavingsPage {

  #savingsService = inject(SavingsService);
  private totalSavings = computed(() => this.#savingsService.savingsList().reduce((acc, item) => acc + item.quantity, 0))
}
