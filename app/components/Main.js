var React = require('react');
var Header = require('./Header');
var AboutSection = require('./AboutSection');
var ProjectSection = require('./ProjectSection');
var ContactSection = require('./ContactSection');

var Main = React.createClass({
  render: function(){
    return (
      <div className='portfolio-container'>  
        <Header />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    )
  }
});

module.exports = Main;