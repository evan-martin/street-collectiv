const INITIAL_STATE = {
  sections: [
    {
      md: true,
      title: 'shop 1',
      imageUrl: 'https://picsum.photos/500/500',
      id: 1,
      linkUrl: '/shop1',
      owner: 'Owner 1',
      quote: 'These pretzles are making me thirsty.',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.'
    },
    {
      md: true,
      title: 'shop 2',
      imageUrl: 'https://picsum.photos/500/501',
      id: 2,
      linkUrl: '/shop2',
      reverse: 'reverse',
      owner: 'Owner 2',
      quote: 'These pretzles are making me thirsty.',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.'
    },
    {
      dc: true,
      title: 'shop 3',
      imageUrl: 'https://picsum.photos/500/502',
      id: 3,
      linkUrl: '/shop3',
      owner: 'Owner 3',
      quote: 'These pretzles are making me thirsty.',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.'
    },
    {
      dc: true,
      title: 'shop 4',
      imageUrl: 'https://picsum.photos/500/503',
      id: 4,
      linkUrl: '/shop4',
      reverse: 'reverse',
      owner: 'Owner 4',
      quote: 'These pretzles are making me thirsty.',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.'
    },
    {
      va:true,
      title: 'shop 5',
      imageUrl: 'https://picsum.photos/500/504',
      id: 5,
      linkUrl: '/shop5',
      owner: 'Owner 5',
      quote: 'These pretzles are making me thirsty.',
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
