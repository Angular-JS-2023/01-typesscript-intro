
//** No usar any
export function whatsMyType<T>( argument: T ): T {

  return argument;
}

const amIString: string = whatsMyType<string>('Hola Mundo');
const amINumber: number = whatsMyType<number>(100);
const amIArray: number[] = whatsMyType<number[]>([1,2,3,4,5,6]);

console.log(amIString.split(' ')); // Separar en array
console.log(amINumber.toFixed());
console.log(amIArray.join('-')); // unir