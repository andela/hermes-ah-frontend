import React, { Component } from 'react';

class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  toggleReplies = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <div className="comment-cont">
        <h3>Comments</h3>
        {/* wriite comment */}
        <div className="write-comment">
          <form className="comment-text-wrap">
            <div className="wrap-img-text">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/mchardex/image/upload/v1523618086/bukunmi.jpg"
                  alt="author"
                />
              </div>
              <textarea
                type="text"
                name="comment-text"
                placeholder="Write a comment..."
                className="text-area-comm"
              />
            </div>
            <button type="submit" className="submit-comment">
              Comment
            </button>
          </form>
        </div>

        <div className="comments-cont-text-content">
          <div className="wrap-image-author">
            <div className="image-author">
              <div className="commenter-img">
                <img
                  src="https://res.cloudinary.com/mchardex/image/upload/v1557421338/animals_hero_antelope.jpg"
                  alt="author"
                />
              </div>
              <div className="commenter-details">
                <h3>Anayo Oleru</h3>
                <span>April 13</span>
              </div>
            </div>
            <i className="fas fa-ellipsis-v" />
          </div>
          <div className="commenter-text">
            <p>
              In sit amet pretium eros, sed varius arcu. Ut tincidunt purus
              vitae sollicitudin fringilla. Ut at eros pulvinar, rutrum nulla
              non, vestibulum massa. Etiam ut ligula sodales, fermentum mi in,
              iaculis lorem. Vestibulum magna dui, consectetur luctus tempus sit
              amet, rutrum ac sem. Cras augue tellus, dictum a lacus eget, porta
              luctus quam.
            </p>
          </div>
          <div className="commt-details">
            <p className="last-upd">19h ago</p>
            <span>.</span>
            <p className="reply">Reply</p>
          </div>
          <div className="hide-replies">
            <hr className="line" />
            <button type="button" onClick={this.toggleReplies}>
              {toggle ? 'Hide replies' : 'Show replies'}
            </button>
          </div>

          {/* reponses to comment */}
          {toggle ? (
            <div className="response">
              <div className="wrap-image-author">
                <div className="image-author">
                  <div className="commenter-img">
                    <img
                      src="https://res.cloudinary.com/mchardex/image/upload/v1557421338/animals_hero_antelope.jpg"
                      alt="author"
                    />
                  </div>
                  <div className="commenter-details">
                    <h3>Anayo Oleru</h3>
                    <span>April 13</span>
                  </div>
                </div>
                <i className="fas fa-ellipsis-v" />
              </div>
              <div className="commenter-text">
                <p>
                  In sit amet pretium eros, sed varius arcu. Ut tincidunt purus
                  vitae sollicitudin fringilla. Ut at eros pulvinar, rutrum
                  nulla non, vestibulum massa. Etiam ut ligula sodales,
                  fermentum mi in, iaculis lorem. Vestibulum magna dui,
                  consectetur luctus tempus sit amet, rutrum ac sem. Cras augue
                  tellus, dictum a lacus eget, porta luctus quam.
                </p>
              </div>
              <div className="commt-details">
                <p className="last-upd">19h ago</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default CommentCard;
