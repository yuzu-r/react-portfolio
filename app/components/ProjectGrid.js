var React = require('react');
require('../main.css');

var ProjectGrid = React.createClass({
  myAlert: function(){
    alert('info clicked');
  },
  render: function(){
    var self = this;
    return (
      <ul className='grid caption-style'>
        {this.props.projects.map(function(p, index){
          var alt = 'img' + index;
          var activeStyle = null;
          if (p.name === self.props.currentProjectName) {
            console.log('i found me and props style is', self.props.imgStyleClass);
            // only set the class for currentProjectName! not all of them
            activeStyle = self.props.imgStyleClass;
          }
          console.log(p.name, activeStyle);
          return(
            <li key={index} onClick={self.props.openMe.bind(null, p)}>
              <figure>
                <img src='http://lorempixel.com/250/250' alt={alt} className={activeStyle} />
                <i className="fa fa-info-circle fa-2x touch-info" aria-hidden="true" onClick={self.myAlert}></i>
                <figcaption className={activeStyle}>
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

