import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Saving } from '../../interfaces/saving-item.interface';
import { form, FormField, min, required } from '@angular/forms/signals';
import { SavingsService } from '../../services/savings.service';

@Component({
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormField],
  selector: 'app-create-saving-dialog',
  styleUrl: './create-saving-dialog.scss',
  templateUrl: './create-saving-dialog.html',
})
export class CreateSavingDialog {
  readonly dialogRef = inject(MatDialogRef<CreateSavingDialog>);
  #savingsService = inject(SavingsService);
  #savingModel = signal<Omit<Saving, 'id'>>({
    name: '',
    quantity: 0
  });
  private createSavingForm = form(this.#savingModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Este campo es requerido' });
    required(schemaPath.quantity);
    min(schemaPath.quantity, 0);
  });

  private closeDialog() {
    this.dialogRef.close();
  }

  private onSubmit(event: Event) {
    event.preventDefault();
    this.#savingsService.addSaving(this.createSavingForm().value()).then(() => {
      this.closeDialog();
    });
  }

}
