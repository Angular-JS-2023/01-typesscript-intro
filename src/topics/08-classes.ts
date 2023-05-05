
export class Person {

  // public name: string | undefined;
  // public name?: string;
  public name: string;
  private address: string
  
  constructor() {
    this.name = 'Angel';
    this.address = 'New York';
  }

  // constructor(name: string, address: string) {
  //   this.name = name;
  //   this.address = address;
  // }

}

const ironman = new Person();

console.log(ironman);

// Compila ts siempre a js, por eso lo imprime
// console.log(ironman.address);
