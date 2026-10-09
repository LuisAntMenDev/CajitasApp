import { Component } from '@angular/core';
import { CoreLayout } from './core/layouts/core/core-layout';

@Component({
  imports: [CoreLayout],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App { }
