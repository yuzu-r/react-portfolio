var React = require('react');
require('../main.css');

var ProjectGrid = React.createClass({
  render: function(){
    var self = this;
    return (
      <ul className='grid caption-style'>
        {this.props.projects.map(function(p, index){
          var alt = 'img' + index;
          var activeStyle = null;
          if (p.name === self.props.currentProjectName) {
            activeStyle = self.props.imgStyleClass;
          }
          return(
            <li key={index} onClick={self.props.openMe.bind(null, p)}>
              <figure>
                <img src='http://lorempixel.com/250/250' alt={alt} className={activeStyle} />
                
                <figcaption className={activeStyle}>
                  <h4>{p.shortDesc}</h4>
                  <br/>
                  <a href="#portfolio" className='more-info' onClick={self.props.openOverlay.bind(null,p)}>more info...</a>
                </figcaption>
              </figure>
            </li>
            )
        })}
      </ul>
    )
  }
})

module.exports = ProjectGrid;

