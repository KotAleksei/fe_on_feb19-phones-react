import React from 'react';

export class Viewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mainPhoto: this.props.phone.images[0]
      }
  
    }
    handleClick(idx) {
      console.log(idx);
      this.setState({
        mainPhoto: this.props.phone.images[idx]
      })
    }
    render() {
      
      const { onBack, phone: { name, description, images }, addInShopping } = this.props,
            { mainPhoto } = this.state;
      console.log("VIEWER: ", this.props);
      return (
        <div>
          <img className="phone" src={mainPhoto} alt='Main_photoPhone' />
          <button onClick={onBack}>Back</button>
          <button onClick={() => addInShopping()}>Add to basket</button>
  
          <h1>{name}</h1>
          <p>{description}</p>
  
          <ul className="phone-thumbs">
            { images.map((imageUrl,idx) => (
              <li key={idx}>
                <img 
                  src={imageUrl} 
                  alt='photoPhones' 
                  onClick={() => this.handleClick(idx)}/>
              </li>
            )) }
          </ul>
      </div>
      )
    }
  };