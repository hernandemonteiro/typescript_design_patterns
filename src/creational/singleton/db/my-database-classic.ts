import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _interface: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic._interface === null) {
      MyDatabaseClassic._interface = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._interface;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }

  consoleExample(): void {
    console.log('hello');
  }
}

const instance1 = MyDatabaseClassic.getInstance();
const instance2 = MyDatabaseClassic.getInstance();

instance1.add({
  name: 'Hernande',
  age: 24,
});

instance2.show();

instance1.consoleExample();

console.log(instance1 === instance2);
