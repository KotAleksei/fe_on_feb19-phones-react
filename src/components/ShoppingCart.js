import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  render(){
    const { removeItem, cards } = this.props;
    return (
      <section>
        <p className='tittle_shoping_card'>Shopping Cart: {cards ? cards.length : 0} Items</p>
        <ul className='shopingCardList'>
          {
            cards && cards.map((el,idx) => (
              <li key={idx} className='shopingCardItem'>
                <span className='shopinCardName'>{el}</span>
                <button onClick={() => removeItem(idx)} className='removeButn'>Remove</button>
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
};

export default ShoppingCart;
