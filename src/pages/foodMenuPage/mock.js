import { v4 as uuid } from 'uuid';

export const starters = [
  {
    id: uuid(),
    name: 'CRISPY RICE CAVIAR',
    description: 'Salmon or tuna, spicy aoili, Kaluga caviar',
    price: '28',
  },
  {
    id: uuid(),
    name: 'KANI ROLL',
    description: 'King crab, aioli, jalapeno butter, wrapped in soy paper',
    price: '24',
  },
  {
    id: uuid(),
    name: 'BLUEFIN TORO TARTAR WITH CAVIAR',
    description: 'Wasabi soy sauce',
    price: '41',
  },
];

export const entrees = [
  {
    id: uuid(),
    name: 'SEA BASS DEN MISO',
    description: 'Pan-seared Chilean sea bass, caramelized miso sauce',
    price: '59',
  },
  {
    id: uuid(),
    name: 'CEDAR WOOD SALMON',
    description: 'Pan-seared king salmon, cedar smoked, teriyaki sauce',
    price: '49',
  },
  {
    id: uuid(),
    name: 'TRUFFLE PASTA',
    description: 'Wild mushroom, shaved truffle',
    price: '32',
  },
];

export const desserts = [
  {
    id: uuid(),
    name: 'CRÉME BRÜLÉE',
    description: 'Rich custard base topped with a layer of hardened caramelized sugar',
    price: '18',
  },
  {
    id: uuid(),
    name: 'FOREST FRUIT TART',
    description:
      'Shortcrust pastry filled with pastry cream, lavishly garnished with an assortment of wild berries',
    price: '18',
  },
  {
    id: uuid(),
    name: 'CHOCOLATE MOUSSE CAKE',
    description:
      'Chocolate mousse on a sponge cake base with a heart of creamy Santo Domingo Chocolate',
    price: '18',
  },
];

export const lateNight = [
  {
    id: uuid(),
    name: 'TRUFFLE FRIES',
    description: '',
    price: '16',
  },
  {
    id: uuid(),
    name: 'SEASONAL VEGGIE GYOZAS',
    description: '',
    price: '21',
  },
  {
    id: uuid(),
    name: 'TRUFFLE WAGYU BITES',
    description: 'Seared Wagyu beef, truffle pecorino, tartufata aioli',
    price: '26',
  },
];

export const foodMenu = [
  {
    id: uuid(),
    title: 'STARTERS',
    type: starters,
  },
  {
    id: uuid(),
    title: 'ENTREES',
    type: entrees,
  },
  {
    id: uuid(),
    title: 'Desserts',
    type: desserts,
  },
  {
    id: uuid(),
    title: 'Late night',
    type: lateNight,
  },
];
