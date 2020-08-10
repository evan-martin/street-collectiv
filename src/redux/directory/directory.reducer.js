const INITIAL_STATE = {
  sections: [
    {
      md: true,
      title: 'shop 1',
      imageUrl: 'https://picsum.photos/500/500',
      id: 1,
      linkUrl: 'shop/shop1',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.'
    },
    {
      md: true,
      title: 'shop 2',
      imageUrl: 'https://picsum.photos/500/501',
      id: 2,
      linkUrl: 'shop/shop2',
      reverse: 'reverse',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.'
    },
    {
      dc: true,
      title: 'shop 3',
      imageUrl: 'https://picsum.photos/500/502',
      id: 3,
      linkUrl: 'shop/shop3',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.'
    },
    {
      dc: true,
      title: 'shop 4',
      imageUrl: 'https://picsum.photos/500/503',
      id: 4,
      linkUrl: 'shop/shop4',
      reverse: 'reverse',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.'
    },
    {
      va:true,
      title: 'shop 5',
      imageUrl: 'https://picsum.photos/500/504',
      id: 5,
      linkUrl: 'shop/shop5',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
