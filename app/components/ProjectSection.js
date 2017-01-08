var React = require('react');
require('../main.css');
var ProjectGrid = require('./ProjectGrid');
var ProjectOverlay = require('./ProjectOverlay');

var ProjectSection = React.createClass({
  getInitialState: function(){
    return {
      currentProjectName: 'hro',
      currentProjectDescription: 'hi',
      overlayStyleClass: 'overlay overlay-hidden'
    }
  },
  getDefaultProps: function(){
    return {
      projects: [ {name: 'hro', 
                    shortDesc: 'ecommerce website',
                    isDesktopOnly: 'false',
                    mobileImage: '',
                    desktopImage: '',
                    liveLink: 'http://www.hroils.com'
                  }, 
                  {name: 'kaizen', 
                    shortDesc: 'let the wookiee win',
                    isDesktopOnly: 'true',
                    mobileImage: '',
                    desktopImage:'',
                    liveLink: 'http://www.google.com'
                  }
                ]
    }
  },
  closeOverlay: function(){
    this.setState({
      overlayStyleClass: 'overlay overlay-hidden'
    })
  },
  openOverlay: function(me){
    console.log('open overlay', me)
    this.setState({
      currentProjectDescription: me.shortDesc,
      overlayStyleClass: 'overlay overlay-visible'
    })
  },
  render: function(){
    return (
      <div className='section'>
        <span className='anchor-pad' id='portfolio'></span>
        <div className='container'>
          <h3 className='text-center'>MY PROJECTS</h3>
          <ProjectGrid 
            projects={this.props.projects}
            openMe={this.openOverlay} />
          <ProjectOverlay 
            styleClass={this.state.overlayStyleClass}
            projectDescription={this.state.currentProjectDescription}
            closeMe={this.closeOverlay} />
        </div>
      </div>
    )
  }
})

module.exports = ProjectSection;