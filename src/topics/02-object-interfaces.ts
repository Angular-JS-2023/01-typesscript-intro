
// Un arreglo que puede recibir => (string | number | boolean)[]
// l

// Manejar const siempre
// const son mas ligeras y evitan la manipulación
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character { 
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // opcional
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';

console.log({ skills });
console.table({ strider });

export {};