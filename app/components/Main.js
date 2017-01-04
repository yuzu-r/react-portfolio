var React = require('react');

var Main = React.createClass({
  getInitialState: function(){
    return {
      greeting: 'ohayou'
    }
  },
  render: function(){
    return (
      <div className='project-container'>  
        <div className='project'>
          <h4>{this.state.greeting} {this.props.projects}</h4>
        </div>
      </div>
    )
  }
});

module.exports = Main;