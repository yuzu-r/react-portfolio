var React = require('react');
var Header = require('./Header');
var ProjectSection = require('./ProjectSection');

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
        <div className='container'>
          <h4>{this.state.greeting} {this.props.projects}</h4>
        </div>
      </div>
    )
  }
});

module.exports = Main;