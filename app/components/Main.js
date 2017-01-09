var React = require('react');
var Header = require('./Header');
var ProjectSection = require('./ProjectSection');
var ContactSection = require('./ContactSection');

var Main = React.createClass({
  getInitialState: function(){
    return {
      greeting: 'ohayou'
    }
  },
  render: function(){
    return (
      <div className='portfolio-container'>  
        <Header />
        <ProjectSection />
        <ContactSection />
      </div>
    )
  }
});

module.exports = Main;