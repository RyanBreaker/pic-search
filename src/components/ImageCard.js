import React from 'react';

class ImageCard extends React.Component {
  state = { spans: 0 };

  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);

      this.setState({ spans });
    });
  }

  render() {
    const { urls, alt_description } = this.props.image;

    // noinspection JSUnresolvedVariable
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
