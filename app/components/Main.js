var React = require('react');
var SimpleHeader = require('./SimpleHeader');
var AboutSection = require('./AboutSection');
var ProjectSection = require('./ProjectSection');
var ContactSection = require('./ContactSection');

var Main = React.createClass({
  render: function(){
    return (
      <div className='portfolio-container'>  
        <span className="anchor-pad" id="about"></span>  
        <SimpleHeader />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    )
  }
});

module.exports = Main;