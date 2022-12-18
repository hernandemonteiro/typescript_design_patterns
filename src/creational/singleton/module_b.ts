import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({ name: 'Joana', age: 24 });
myDatabaseClassic.add({ name: 'Francisca', age: 34 });
myDatabaseClassic.add({ name: 'Maria', age: 54 });

myDatabaseClassic.show();
