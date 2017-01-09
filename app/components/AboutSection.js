var React = require('react');
require('../main.css');

var AboutSection = React.createClass({
  render: function(){
    return (
      <div className='section about'>
        <span className="anchor-pad" id="about"></span>
        <div className="container-fluid">
          <div className="row display-table">
          <div className="col-md-4 col-md-offset-1 display-cell">
            <img src="http://www.lorempixel.com/273/273" alt="picture of me" className="img-circle img-responsive" />
          </div>
            <div className="col-md-6 col-md-offset-1 display-cell">
            <p>Hi, I'm Tracy.</p>
            <p>Here you'll find some of the projects I've worked on to level up my web development skills.</p>
            </div>
          </div>
        </div>       
      </div>
    )
  }
})

module.exports = AboutSection;