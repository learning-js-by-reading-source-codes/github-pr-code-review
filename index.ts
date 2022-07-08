interface Human {
  id?: number;
  name: string;
  age: number;
}

class Person implements Human {
  name: string = '';
  age: number = 0;
  contructor(name: string, age: number) {
    this.name = name ?? 'anonymous';
    this.age = age ?? 1;
  }
  getName() {
    console.log('name =', this.name);
    return this.name;
  }
  getAge() {
    console.log('age =', this.age);
    return this.age;
  }
}

/*

https://www.typescriptlang.org/play?

*/
