
// Parametros => (a: number, b: number)
function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${ a + b }`;
}

function multiply(
  firstNumber: number, 
  secondNumber?: number, 
  base: number = 2,
): number {
  return firstNumber * base;
}

// Argumentos => (1, 2)
const result: number = addNumbers(1, 2);
// console.log({ result });

const resultString: string = addNumbersArrow(1, 2);
// console.log({ resultString });

const resultMultiply: number = multiply(5);
// console.log({ resultMultiply });


interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
  character.hp += amount;
}

const strider: Character = {
  name: 'Strinder',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${ this.hp }`);
  },
}

healCharacter(strider, 10);
healCharacter(strider, 50);

strider.showHp();


export {};