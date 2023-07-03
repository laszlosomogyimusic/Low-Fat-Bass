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
    price: '£150',
    tags: 'per day',
  },
  {
    title: 'Remote recording',
    price: '£100',
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
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { studioworks, musicianworks, awards };
