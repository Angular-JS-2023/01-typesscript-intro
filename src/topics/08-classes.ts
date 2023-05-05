
export class Person {
  // public name: string | undefined;
  // public name?: string;
  // public name: string;
  // private address: string

  // constructor(name: string, address: string) {
  //   this.name = name;
  //   this.address = address;
  // }

  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = 'No Address'
  ) {}

}

// export class Hero extends Person {

//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string,
//   ) {
//     super(realName, 'New York');
//   }

// }

//** Priorizar la composicion frente a la herencia
export class Hero {

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,
  ) {

  }

}

// const ironman = new Person('Ironman', 'New York');
// const ironman = new Person('Ironman');
// const ironman = new Hero('Ironman', 'New York');

const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);

// Compila ts siempre a js, por eso lo imprime
// console.log(ironman.address);
