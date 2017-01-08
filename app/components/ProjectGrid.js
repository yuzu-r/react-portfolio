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
                <figcaption>
                  <h4>{p.name}</h4>
                  <a href='#'>visit me</a>
                  <br/>
                  <span>{p.shortDesc}</span>
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

