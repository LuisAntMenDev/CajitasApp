import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CreateSavingDialog } from '../create-saving-dialog/create-saving-dialog';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'savings-add-saving',
  styleUrl: './add-saving.scss',
  templateUrl: './add-saving.html',
})
export class AddSaving {

  readonly dialog = inject(MatDialog);

  openCreateSavingDialog() {
    const dialogRef = this.dialog.open(CreateSavingDialog);
  }
}
