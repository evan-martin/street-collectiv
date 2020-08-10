const INITIAL_STATE = {
  sections: [
    {
      title: 'entrepreneur 1',
      imageUrl: 'https://picsum.photos/500/504',
      id: 1,
      linkUrl: 'shop/shop1',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape.'
    },
    {
      title: 'entrepreneur 2',
      imageUrl: 'https://picsum.photos/500/505',
      id: 2,
      linkUrl: 'shop/shop2',
      reverse: 'reverse',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape.'
    },
    {
      title: 'entrepreneur 3',
      imageUrl: 'https://picsum.photos/500/506',
      id: 3,
      linkUrl: 'shop/shop3',
      bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape.'
    },
  ]
};

const highlightReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default highlightReducer;
