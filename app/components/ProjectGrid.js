var React = require('react');
require('../main.css');

var ProjectGrid = React.createClass({
  render: function(){
    var self = this;
    return (
      <ul className='grid caption-style'>
        {this.props.projects.map(function(p, index){
          var alt = 'img' + index;
          return(
            <li key={index} onClick={self.props.openMe.bind(null, p)}>
              <figure>
                <img src='http://lorempixel.com/250/250' alt={alt} />
                <i className="fa fa-info-circle fa-2x touch-info" aria-hidden="true"></i>
                <figcaption>
                  <h4>{p.shortDesc}</h4>
                  <br/>
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

