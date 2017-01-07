var React = require('react');
var Header = require('./Header');

var Main = React.createClass({
  getInitialState: function(){
    return {
      greeting: 'ohayou'
    }
  },
  render: function(){
    return (
      <div className='project-container'>  
        <Header />
        <div className='project'>
          <h4>{this.state.greeting} {this.props.projects}</h4>
        </div>
      </div>
    )
  }
});

module.exports = Main;