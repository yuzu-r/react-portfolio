var React = require('react');
require('../main.css');

var FadeInImage = React.createClass({
  getInitialState: function(){
    return {
      isLoaded: false
    }
  },
  getDefaultProps: function() {
    return {altText: 'site screenshot'};
  },
  handleImageLoad: function(){
    this.setState({isLoaded:true});    
  },
  render: function(){
    var imageClass = this.state.isLoaded === true ? 'image image-loaded' : 'image';
    return (
      <img src={this.props.src} 
           className = {imageClass}
           alt={this.props.altText}
           onLoad = {this.handleImageLoad}  />
    )
  }
});

module.exports = FadeInImage;
