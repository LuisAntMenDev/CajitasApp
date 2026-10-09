import { Routes } from '@angular/router';
import { SavingsPage } from './savings/pages/savings-page/savings-page';

export const routes: Routes = [
    {
        path: '',
        component: SavingsPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];
