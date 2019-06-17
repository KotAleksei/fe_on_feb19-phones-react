import React from 'react';

export class Viewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mainPhoto: this.props.phone.images[0],
        imagesUrl: []
      }
    }

    handleClick(index) {
      this.setState({
        mainPhoto: this.props.phone.images[index]
      })
    }
    // componentDidMount() {
    //   const images = this.props.phone.images;
    //   this.setState({
    //     imagesUrl: images
    //   })
    // }

    render() {
      const { onBack, phone: { name, description, images }, addInShopping } = this.props,
        { mainPhoto } = this.state; 
        console.log("VEV: ", images);
      return (
        <div>
          <img className="phone" src={mainPhoto} alt='Main_photoPhone' />
          <button onClick={onBack}>Back</button>
          <button onClick={() => {
              addInShopping(this.props.phone.name);
              }}>Add to basket</button>
  
          <h1>{name}</h1>
          <p>{description}</p>
  
          <ul className="phone-thumbs">
            { images.map((imageUrl,index) => ( 
              <li key={index}>
                <img 
                  src={imageUrl} 
                  alt='photoPhones' 
                  onClick={() => this.handleClick(index)}/>
              </li>
            )) }
          </ul>
      </div>
      )
    }
  };