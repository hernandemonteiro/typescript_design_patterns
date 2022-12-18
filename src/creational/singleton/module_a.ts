import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({ name: 'Hernande', age: 24 });
myDatabaseClassic.add({ name: 'João', age: 34 });
myDatabaseClassic.add({ name: 'Lucas', age: 54 });
