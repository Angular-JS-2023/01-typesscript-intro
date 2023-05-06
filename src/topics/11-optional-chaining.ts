
export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Angel',
}

const passenger2: Passenger = {
  name: 'Luis',
  children: ['Natalia', 'Elizabeth'],
}

const returnChildren = ( passenger: Passenger ): number => {

  // ?. si existe
  // !. asegurarle a ts que si va a llegar siempre un valor (not null assertion operation)
  const howManyChildren = passenger.children?.length || 0;

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
}

returnChildren( passenger1 );
returnChildren( passenger2 );