import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet, MatToolbarModule],
  selector: 'core-layout',
  styleUrl: './core-layout.scss',
  templateUrl: './core-layout.html',
})
export class CoreLayout { }
