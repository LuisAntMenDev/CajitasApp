import Dexie, { type EntityTable } from 'dexie';
import { Saving } from '../interfaces/saving-item.interface';

const db = new Dexie('CajitasApp') as Dexie & {
    savings: EntityTable<Saving, 'id'>;
};

db.version(1).stores({
    savings: '++id'
});

export { db };
