var React = require('react');
require('../main.css');
var ProjectGrid = require('./ProjectGrid');
var ProjectOverlay = require('./ProjectOverlay');

var ProjectSection = React.createClass({
  getInitialState: function(){
    return {
      currentProjectName: 'hro',
      overlayStyleClass: 'overlay overlay-hidden',
      imgStyleClass: null,
      figcaptionStyleClass: null,
    }
  },
  getDefaultProps: function(){
    return {
      projects: [ {name: 'hro', 
                    shortDesc: 'hro, an e-commerce website',
                    longDesc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    isDesktopOnly: false,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/hro-title.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/hro_mobile_view_mini.png',
                    desktopImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/hro_desktop_320x282.png',
                    liveLink: 'http://www.hroils.com',
                    githubLink: null
                  }, 
                  {name: 'kaizen', 
                    shortDesc: 'kaizen chess, play chess online',
                    longDesc: 'Swiss chard ',
                    isDesktopOnly: true,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/kaizen-title.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/kaizen-chess-b.png',
                    desktopImage:'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/kaizen-chess-a.png',
                    liveLink: 'http://kaizen-chess.herokuapp.com',
                    githubLink: 'https://github.com/yuzu-r/kaizen-chess'
                  },
                  {name: 'react-hack', 
                    shortDesc: 'react-hack, a dungeon crawler game',
                    longDesc: 'This is a retro desktop-style homage to nethack with a little zork thrown in for good measure.',
                    isDesktopOnly: true,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/hack-title.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/react-hack-b.png',
                    desktopImage:'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/react-hack-a.png',
                    liveLink: 'https://codepen.io/yuzu-r/debug/rWvPXG',
                    githubLink: 'https://codepen.io/yuzu-r/pen/rWvPXG'
                  },
                  {name: 'pomodoro', 
                    shortDesc: 'pomodoro, a responsive timer',
                    longDesc: 'set work and break intervals',
                    isDesktopOnly: false,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/pomodoro-title.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/pomodoro_p.png',
                    desktopImage:'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/pomodoro_l.png',
                    liveLink: 'https://codepen.io/yuzu-r/debug/ZpNZOJ',
                    githubLink: 'https://codepen.io/yuzu-r/pen/ZpNZOJ'
                  },

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
    });      
  },
  openFigCaption: function(me){
    if (this.state.imgStyleClass === 'show-figcaption' && me.name === this.state.currentProjectName) {
      this.setState({
        imgStyleClass: null,
        figcaptionStyleClass: null
      })
    }
    else {
      this.setState({
        currentProjectName: me.name,
        imgStyleClass: 'show-figcaption',
        figcaptionStyleClass: 'show-figcaption'
      })      
    }
  },
  openMe: function(me) {
    // this is the click event from each project
    // it does different things depending on touchevent or not touchevent
    if (Modernizr.touchevents) {
      this.openFigCaption(me);
    }
    else {
      this.openOverlay(me);
    }
  },
  render: function(){
    return (
      <div className='section project'>
        <span className='anchor-pad' id='portfolio'></span>
        <div className='container'>
          <h3 className='text-center'>MY PROJECTS</h3>
          <ProjectGrid 
            projects={this.props.projects}
            openMe={this.openMe}
            openOverlay={this.openOverlay}
            figcaptionStyleClass={this.state.figcaptionStyleClass}
            imgStyleClass={this.state.imgStyleClass}
            currentProjectName={this.state.currentProjectName} />
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