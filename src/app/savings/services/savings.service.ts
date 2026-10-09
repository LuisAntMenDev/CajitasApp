import { Service } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { liveQuery } from 'dexie';
import { from } from 'rxjs';
import { Saving } from '../interfaces/saving-item.interface';
import { db } from './db';

@Service()
export class SavingsService {

    savingsList = toSignal(
        from(liveQuery(() => db.savings.toArray())),
        { initialValue: [] as Saving[] }
    );

    async addSaving(data: Omit<Saving, 'id'>) {
        await db.savings.add(data);
    }

    async deleteSaving(id: number) {
        await db.savings.delete(id);
    }
}
