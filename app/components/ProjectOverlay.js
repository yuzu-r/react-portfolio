var React = require('react');
require('../main.css');
require('array.prototype.findindex');
var FadeInImage = require('./FadeInImage');
//var ImageFadeIn = require('./react-image-fade-in');
import ImageFadeIn from 'react-image-fade-in';

var ProjectOverlay = React.createClass({
  getInitialState: function() {
    return {
      styleClass: 'overlay overlay-hidden'
    }
  },
  componentWillMount: function(){
    window.addEventListener("keyup", this.handleKeyUp);
  },
  componentWillUnmount: function(){
    window.removeEventListener("keyup", this.handleKeyUp);
  },
  handleKeyUp: function(key){
    if (key.keyCode === 27) {
      this.props.closeMe(); // escape key close
    }
  },
  render: function(){
    var currentProjectIndex = this.props.projects.findIndex(p => p.name === this.props.currentProject);
    var currentProject = this.props.projects[currentProjectIndex];
    var isDesktopOnly = currentProject.isDesktopOnly;
    var overlayStyleDesktopOnly = isDesktopOnly ? 'style-desktop' : '';
    var projectTextClass = 'project-text text-right ' + overlayStyleDesktopOnly;
    var codeLink = null;
    if (currentProject.githubLink) {
      codeLink = <a href={currentProject.githubLink} target='_blank'>View code</a>     
    }
    // if overlay is not showing, don't render the images.
    // only render if showing to keep them current.
    var desktopImage = null;
    var mobileImage = null;
    if (this.props.isOverlayShowing) {
      desktopImage = <FadeInImage src={currentProject.desktopImage} />;
      mobileImage = <FadeInImage src={currentProject.mobileImage} />;
    }
    return (
      <div className={this.props.styleClass}>
        <div className='overlay-content'>
          <a href='#' className='top-close-link' onClick={this.props.closeMe}>&times;</a>
          <h4>{currentProject.shortDesc}</h4>
          <div className='project-flex'>
            <div className='row'>
              <div className='col-xs-8'>
                <div>
                  {desktopImage}
                </div>
              </div>
              <div className='col-xs-4'>
                <div className='project-text text-left'>
                  <a href={currentProject.liveLink} target='_blank'>Visit website</a>
                  <br />
                  {codeLink}
                </div>
              </div>
            </div>
          </div>
          <div className='project-flex-right'>
            <div className='row'>
              <div className='col-xs-8'>
                <div className={projectTextClass}>
                  {currentProject.longDesc}
                </div>
              </div>
              <div className='col-xs-4'>
                {mobileImage}
              </div>
            </div>
          </div>         
          <a href='#' className='close-link' onClick={this.props.closeMe}>close</a>
        </div>
        
      </div>
    )
  }
})

module.exports = ProjectOverlay;
