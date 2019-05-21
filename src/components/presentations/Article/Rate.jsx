import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react';

class Rate extends Component {
  state = {};

  rateHandler = (e, { rating }) => {
    this.setState({ rating });
  };

  render() {
    const { rating } = this.state;

    console.log('This rating', rating);

    return (
      <div className="rate-article">
        <div className="rate">
          <Rating maxRating={5} onRate={this.rateHandler} />
        </div>
        <div className="comment">
          <p>
            <i className="far fa-comment" />
          </p>
          <p>13</p>
        </div>
        <div className="popout">
          <i className="fas fa-ellipsis-v" />
        </div>
      </div>
    );
  }
}

export default Rate;
