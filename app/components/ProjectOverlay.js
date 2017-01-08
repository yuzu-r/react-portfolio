var React = require('react');
require('../main.css');

var ProjectOverlay = React.createClass({
  getInitialState: function() {
    return {
      styleClass: 'overlay overlay-hidden'
    }
  },
  render: function(){
    return (
      <div id='pOverlay' className={this.props.styleClass}>
        <a href='#' className='btn-close' onClick={this.props.closeMe}>&times;</a>
        <div id= 'overlay-content' className="overlay-content">
          {this.props.projectDescription}
        </div>
      </div>
    )
  }
})

module.exports = ProjectOverlay;

// overlay state is in ProjectSection
// it should just store the project name
// the rest of the properties should come from a lookup of the prop, don't pass
// style the overlay with two different styles,
// responsive project will have screen shot of a mobile size shot and a desktop size shot
// desktop project will have two full size screen shots
// have a link to live site
// have a link to github/codepen where appropriate - HRO will not have one
// have a text description providing some details of the project and the skills used
// make sure it stays responsive!
