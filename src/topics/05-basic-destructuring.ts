
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

console.log('Song another:', anotherSong);
console.log('Song:', song);
console.log('Duration:', duration);
console.log('Author:', author);

export {};