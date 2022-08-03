const user = {
  name: 'Julia',
  imgProfile: '',
  favorite: 5,
  cart: 6
};

const products = [
  {
    name: 'Motorola Moto G200',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 1',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 2',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 3',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 4',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 5',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 6',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 7',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 8',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 9',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 10',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 11',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 12',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 13',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 14',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
  {
    name: 'Celular 15',
    price: 144.099,
    category : 'smartphone',
    description : 'Es un equipo potenciado con el procesador Qualcomm Snapdragon 888+ Octacore Kryo Gold prime @ 3.0 GHz Triple Kryo Gold @ 2.419 GHz Quad Kryo Silver @ 1.805 GHz que permite que el Motorola Moto G200 5G tenga la capacidad de desempeñar todas las actividades y tareas cotidianas.',
    img: 'https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Frente_min_8f360be1e8.png',
    stock: 5,
    isAprobed: false
  },
];

export { user, products };