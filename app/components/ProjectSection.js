var React = require('react');
require('../main.css');
var ProjectGrid = require('./ProjectGrid');
var ProjectOverlay = require('./ProjectOverlay');

var ProjectSection = React.createClass({
  getInitialState: function(){
    return {
      currentProjectName: 'hro',
      overlayStyleClass: 'overlay overlay-hidden'
    }
  },
  getDefaultProps: function(){
    return {
      projects: [ {name: 'hro', 
                    shortDesc: 'hro, an e-commerce website',
                    longDesc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    isDesktopOnly: false,
                    mobileImage: 'http://www.lorempixel.com/125/220',
                    desktopImage: 'http://www.lorempixel.com/320/280',
                    liveLink: 'http://www.hroils.com',
                    githubLink: null
                  }, 
                  {name: 'kaizen', 
                    shortDesc: 'kaizen chess, play chess online',
                    longDesc: 'Swiss chard ',
                    isDesktopOnly: true,
                    mobileImage: 'http://www.lorempixel.com/320/280',
                    desktopImage:'http://www.lorempixel.com/320/280',
                    liveLink: 'http://www.google.com',
                    githubLink: 'http://www.shopify.com'
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
    this.setState({
      currentProjectName: me.name,
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
            currentProject={this.state.currentProjectName}
            projects={this.props.projects}
            closeMe={this.closeOverlay} />
        </div>
      </div>
    )
  }
})

module.exports = ProjectSection;