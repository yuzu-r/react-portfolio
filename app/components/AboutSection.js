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
            <img src="https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/madmen_square.png" alt="picture of me" className="img-circle img-responsive" />
          </div>
            <div className="col-md-6 col-md-offset-1 display-cell">
            <p>Hi, I'm Tracy.</p>
            <p>Here you'll find some of the projects I've worked on to level up my web development skills in Rails, JavaScript, and React.</p>
            </div>
          </div>
        </div>       
      </div>
    )
  }
})

module.exports = AboutSection;