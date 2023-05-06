
// Los decoradores son simplemente funciones que ayudan
// a modificar el comportamiento de clases, metodos, etc.
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T 
) {

  return class extends constructor {
    newProperty = 'New Property';
    hello = 'override';
  }

}

@classDecorator
export class SuperClass {
  
  public myProperty: string = 'ABC132';

  print() {
    console.log('Hola Mundo');
  }

}

// Definicion de la clase
console.log(SuperClass);

const myClass = new SuperClass();

// La instancia de la clase
console.log(myClass);