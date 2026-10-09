import { Component, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Saving } from '../../interfaces/saving-item.interface';
import { CurrencyPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  imports: [MatCardModule, MatButtonModule, MatIconModule, CurrencyPipe, MatProgressSpinnerModule],
  selector: 'saving-item',
  styleUrl: './saving-item.scss',
  templateUrl: './saving-item.html',
})
export class SavingItem {

  saving = input.required<Saving>();
  protected delete = output();

  protected isDeleting = signal(false);
  protected isEditing = signal(false);

  protected deleteSaving() {
    this.isDeleting.set(true);
    this.delete.emit();
  }
}
