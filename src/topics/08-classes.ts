
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
    public name: string, 
    private address: string = 'No Address'
  ) {}

}

// const ironman = new Person('Ironman', 'New York');
const ironman = new Person('Ironman');

console.log(ironman);

// Compila ts siempre a js, por eso lo imprime
// console.log(ironman.address);
