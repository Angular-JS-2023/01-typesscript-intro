
interface Details {
  author: string;
  year: number;
}

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
}

const song = 'New Song';

// Desestructuracion
const {
  song: anotherSong, 
  // details: { author },
  details,
  songDuration: duration 
} = audioPlayer;

const { author } = details;

// console.log('Song another:', anotherSong);
// console.log('Song:', song);
// console.log('Duration:', duration);
// console.log('Author:', author);


//** Desestructuracion de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const trunks = dbz[3] || 'No hay personaje';

const [ p1, p2, p3 ]: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , ,  trunksTemp = 'Not found' ]: string[] = ['Goku', 'Vegeta'];


console.warn('Personaje 3:', dbz[2]);
console.warn('Personaje 3:', trunks);

console.warn('Personaje 2:', p2);
console.warn('Personaje 3:', trunksTemp); // No existe


export {};