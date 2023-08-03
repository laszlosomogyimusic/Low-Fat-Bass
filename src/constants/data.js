import images from './images';

const studioworks = [
  {
    title: 'Mixing',
    price: '£56',
    tags: 'per hour',
  },
  {
    title: 'Mastering',
    price: '£40',
    tags: 'per hour',
  },
  {
    title: 'Producing',
    price: '£40',
    tags: 'per hour',
  },
  {
    title: 'Live Recording',
    price: '£90',
    tags: 'per day',
  },
  {
    title: 'Remote recording',
    price: '£90',
    tags: 'per day',
  },
];

const musicianworks = [
  {
    title: 'Bass player in studio',
    price: '£40',
    tags: 'per hour + travel costs',
  },
  {
    title: "Bass player live",
    price: '£40',
    tags: 'per hour + travel costs',
  },
  {
    title: 'Guitar player in studio',
    price: '£40',
    tags: 'per hour + travel costs',
  },
  {
    title: "Guitar player live",
    price: '£40',
    tags: 'per hour + travel costs',
  },
  {
    title: 'Drummer',
    price: '£40',
    tags: 'per hour + travel costs',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Grammy 1996',
    subtitle: 'Best Rock Album',
  },
  {
    imgUrl: images.award01,
    title: 'Oscar 2003',
    subtitle: 'Best Music',
  },
  {
    imgUrl: images.award05,
    title: 'Upcoming Bass Player',
    subtitle: 'Pretty good bass player',
  },
  {
    imgUrl: images.award03,
    title: 'The Dude',
    subtitle: 'That rug really tied the room together.',
  },
];

export { studioworks, musicianworks, awards };
